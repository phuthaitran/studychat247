# Studychat247 - A Vietnamese Chatbot tutor for High school students

## About
This is a project related to the field of Natural Language Processing and Artificial Intelligence in education. In this project, we tried to create a chatbot that answers high school students questions, with Retrieval-Augmented Generation method that takes information from the national textbooks. The system utilized the Langchain library for the chat system, FastAPI framework for running the system, and delivered users with a simple web-based chat interface with ReactJS



## Requirements
- Frontend: NodeJS, npm (Latest)
- Backend: Python 3.11+
- OS: Windows 10+

## Installation
### Backend
To avoid dependency conflicts, the packages should be installed in a virtual environment. To create virual environment, go to the backend directory in terminal and do

```
python -m venv .venv
```

Then access the created virtual environment:
- For Windows:
```
.venv/Scripts/activate
```

- For MacOS/Linux:
```
source .venv/Scripts/activate
```
After that, install the required dependencies listed on requirements.txt by:
```
pip install -r requirements.txt
```
### Frontend
```
npm install
```

## Running (development phase)
### Backend
```
fastapi dev main.py
```

### Frontend
```
npm run dev
```