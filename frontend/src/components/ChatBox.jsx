import React, { useEffect, useRef, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { LuGraduationCap, LuLoader } from 'react-icons/lu'
import Message from './Message'
import Topbar from './Topbar'
import { askQuestion } from '../api/chatApi'
import toast from 'react-hot-toast'

const ChatBox = ({ setIsSidebarOpen }) => {
  const {
    currentSession,
    currentSessionId,
    sessionLoading,
    sessionSubject,
    sessionGrade,
    topbarSubject,
    topbarGrade,
    fetchSessions,
    selectSession,
  } = useAppContext();

  const [loading, setLoading] = useState(false); // send-in-flight flag
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);

  // Ref to the scrollable messages container — used for controlled auto-scroll.
  // scrollTop = scrollHeight keeps scrolling strictly inside this div and does
  // NOT bubble up to scroll the page (unlike scrollIntoView).
  const messagesContainerRef = useRef(null);

  // Always reflects the *current* value of currentSessionId.
  // Used inside async callbacks to avoid stale closure reads.
  const currentSessionIdRef = useRef(currentSessionId);
  useEffect(() => {
    currentSessionIdRef.current = currentSessionId;
  }, [currentSessionId]);

  // ── Sync messages when the active session IDENTITY changes ────────────────
  //
  // Depends on `currentSession?.id` (not the full object) so that patching
  // metadata fields on the same session does NOT wipe local messages.
  //
  // Also resets `loading` so the "Đang trả lời..." bubble never bleeds onto
  // a session the user navigated to while an answer was in-flight (Bug 2).
  useEffect(() => {
    if (currentSession) {
      setMessages(currentSession.messages ?? []);
    } else {
      setMessages([]);
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSession?.id]);

  // Auto-scroll to bottom whenever the message list grows.
  // Uses the container ref directly — avoids scrollIntoView() which would
  // scroll every scrollable ancestor (including <body>), causing the whole
  // page to jump down whenever KaTeX re-renders math equations.
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const trimmed = prompt.trim();
    if (!trimmed || loading) return;

    const subject = sessionSubject ?? topbarSubject;
    const grade = sessionGrade ?? topbarGrade;

    // Capture which session triggered this request.
    // null  = user was in "new chat" mode.
    // UUID  = user was continuing an existing session.
    const sessionIdAtStart = currentSessionIdRef.current;

    // Optimistic user bubble (replaced by real DB data after selectSession)
    const optimisticUserMsg = {
      id: `optimistic-${Date.now()}`,
      role: 'user',
      content: trimmed,
      created_at: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, optimisticUserMsg]);
    setPrompt('');
    setLoading(true);

    try {
      const response = await askQuestion({
        session_id: sessionIdAtStart ?? null,
        message: trimmed,
        subject,
        grade,
      });

      if (response.session_created) {
        // Always refresh the sidebar so the new session appears.
        fetchSessions();

        // Auto-select the new session only if the user is still in new-chat mode
        // (i.e. they haven't navigated to another session while waiting).
        // selectSession fetches fresh data from the DB, which now contains both
        // the user message and the assistant reply — no empty state (Bug 1 fixed).
        if (currentSessionIdRef.current === null) {
          await selectSession(response.session_id);
          // After selectSession, useEffect([currentSession?.id]) runs and:
          //   • sets messages from DB (user msg + assistant reply) ✓
          //   • sets loading = false ✓
          // So we return early to avoid the double-append below.
          return;
        }
        // If the user navigated elsewhere while waiting, don't interrupt them.
        // The sidebar is already refreshed; they can click the session to view it.

      } else {
        // Continuing an existing session.
        // Only append the assistant reply if the user is still viewing THIS session.
        // If they navigated away (Bug 2), skip the append — the message is persisted
        // in the DB and will load correctly when they return.
        if (currentSessionIdRef.current === sessionIdAtStart) {
          setMessages((prev) => [...prev, response.message]);
        }
      }
    } catch {
      // Only show the error and roll back the optimistic bubble if the user is
      // still on the session that triggered the request.
      if (currentSessionIdRef.current === sessionIdAtStart) {
        toast.error('Không thể gửi tin nhắn. Vui lòng thử lại.');
        setMessages((prev) => prev.filter((m) => m.id !== optimisticUserMsg.id));
      }
    } finally {
      setLoading(false);
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className='flex-1 flex flex-col relative'>
      {/* Topbar */}
      <Topbar setIsSidebarOpen={setIsSidebarOpen} />

      <div className='flex-1 flex flex-col justify-between m-5 md:m-6 xl:mx-30 max-md:mt-8 overflow-hidden'>

        {/* ── Messages area ─────────────────────────────────────────── */}
        <div ref={messagesContainerRef} className='flex-1 mb-5 overflow-y-scroll'>

          {/* Session loading spinner */}
          {sessionLoading && (
            <div className='flex flex-col items-center justify-center h-full gap-3 text-gray-400'>
              <LuLoader className='w-8 h-8 animate-spin' />
              <span className='text-sm'>Đang tải...</span>
            </div>
          )}

          {/* Empty / new-chat state */}
          {!sessionLoading && messages.length === 0 && (
            <div className='flex flex-col items-center justify-center h-full'>
              <div className='w-24 h-24 rounded-2xl bg-[#D85A30] flex items-center justify-center mb-4'>
                <LuGraduationCap className='w-14 h-14 text-white' />
              </div>
              <h1 className='text-2xl font-bold mb-2'>StudyChat247</h1>
              <p className='text-gray-500'>Hãy bắt đầu cuộc trò chuyện của bạn</p>
            </div>
          )}

          {/* Message bubbles */}
          {!sessionLoading && messages.map((message, index) => (
            <Message key={message.id ?? index} message={message} />
          ))}

          {/* Assistant "thinking" indicator — only for the session that is waiting */}
          {loading && !sessionLoading && (
            <div className='inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-[#fbf9f7] border border-[#82735a]/30 rounded-md my-4'>
              <div className='text-sm reset-tw'>Đang trả lời...</div>
            </div>
          )}

        </div>

        {/* ── Input form ────────────────────────────────────────────── */}
        <form
          onSubmit={onSubmit}
          className='bg-[#f8fafc] border border-[#82735a]/30 rounded-full w-full max-w-2xl p-3 pl-4 mx-auto flex gap-4 items-center'
        >
          <input
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            type="text"
            placeholder='Nhập tin nhắn của bạn...'
            className='flex-1 w-full text-sm outline-none'
            required
            disabled={loading || sessionLoading}
          />
          <button
            disabled={loading || sessionLoading}
            type='submit'
            className='p-2 px-4 bg-[#D85A30] hover:bg-amber-700 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-opacity'
          >
            Gửi
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatBox