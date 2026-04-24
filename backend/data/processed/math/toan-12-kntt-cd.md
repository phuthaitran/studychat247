# CHUYÊN ĐỀ HỌC TẬP TOÁN 12

# MỤC LỤC

## CHUYÊN ĐỀ 1. BIẾN NGẪU NHIÊN RỜI RẠC. CÁC SỐ ĐẶC TRƯNG CỦA BIẾN NGẪU NHIÊN RỜI RẠC

|  Bài 1. Biến ngẫu nhiên rời rạc và các số đặc trưng | 5  |
| --- | --- |
|  Bài 2. Biến ngẫu nhiên có phân bố nhị thức và áp dụng | 15  |
|  Bài tập cuối chuyên đề 1 | 22  |

## CHUYÊN ĐỀ 2. ỨNG DỤNG TOÁN HỌC ĐỀ GIẢI QUYẾT MỘT SỐ BÀI TOÁN TỐI ƯU

|  Bài 3. Vận dụng hệ bất phương trình bậc nhất hai lần để giải quyết một số bài toán quy hoạch tuyến tính | 23  |
| --- | --- |
|  Bài 4. Vận dụng đạo hàm để giải quyết một số bài toán tối ưu | 34  |
|  Bài tập cuối chuyên đề 2 | 44  |

## CHUYÊN ĐỀ 3. ỨNG DỤNG TOÁN HỌC TRONG MỘT SỐ VẤN ĐỀ LIÊN QUAN ĐẾN TÀI CHÍNH

|  Bài 5. Tiền tệ. Lãi suất | 46  |
| --- | --- |
|  Bài 6. Tín dụng. Vay nợ | 54  |
|  Bài 7. Đầu tư tài chính. Lập kế hoạch tài chính cá nhân | 60  |
|  Bài tập cuối chuyên đề 3 | 69  |

|  Bảng tra cứu từ ngữ | 70  |
| --- | --- |
|  Bảng giải thích thuật ngữ | 71  |

# CHUYÊN ĐỀ 1 BIẾN NGẪU NHIÊN RỜI RẠC. CÁC SỐ ĐẶC TRƯNG CỦA BIẾN NGẪU NHIÊN RỜI RẠC

Chuyên đề này giới thiệu biến ngẫu nhiên rời rạc, công thức Bernoulli (mang tên nhà toán học người Thụy Sĩ Jacob Bernoulli) và biến ngẫu nhiên có phân bố nhị thức (gần với công thức Bernoulli). Chuyên đề cũng nêu ứng dụng của các kiến thức trên vào một số bài toán có nội dung thực tiễn.


## Bài 1 BIẾN NGẪU NHIÊN RỜI RẠC VÀ CÁC SỐ ĐẶC TRƯNG

**THUẬT NGỮ**

- Biến ngẫu nhiên rời rạc
- Bảng phân bố xác suất của biến ngẫu nhiên rời rạc
- Kì vọng, phương sai và độ lệch chuẩn của biến ngẫu nhiên rời rạc

**KIẾN THỨC, KĨ NĂNG**

- Nhận biết khái niệm biến ngẫu nhiên rời rạc.
- Biết lập bảng phân bố xác suất của biến ngẫu nhiên rời rạc.
- Biết tính kì vọng, phương sai và độ lệch chuẩn của biến ngẫu nhiên rời rạc và giải thích ý nghĩa của chúng.

Trong một trò chơi, các câu hỏi gồm hai loại I và II:

- Với câu hỏi loại I: Trả lời đúng được 20 điểm. Trả lời sai không được điểm (0 điểm).
- Với câu hỏi loại II: Trả lời đúng được 80 điểm. Trả lời sai không được điểm (0 điểm).

Ở vòng 1, người chơi được chọn một trong hai loại câu hỏi. Sau khi chọn xong loại câu hỏi, người chơi bốc thăm ngẫu nhiên một câu hỏi trong loại đó. Nếu trả lời sai thì phải dừng cuộc chơi. Nếu trả lời đúng, thì sinh sẽ bước vào vòng 2, bốc ngẫu nhiên một câu hỏi trong loại còn lại. Người chơi trả lời đúng hay sai, cuộc chơi cũng kết thúc tại đây. Giả thiết rằng việc trả lời đúng câu hỏi vòng 1 sẽ không ảnh hưởng đến xác suất trả lời đúng hay sai câu hỏi ở vòng 2.

Bạn Minh tham gia cuộc chơi. Giả sử xác suất để Minh trả lời đúng câu hỏi loại I là 0,8; xác suất để Minh trả lời đúng câu hỏi loại II là 0,6.

Hỏi ở vòng 1 Minh nên chọn câu hỏi loại I hay câu hỏi loại II?

### 1. BIẾN NGẪU NHIÊN RỜI RẠC VÀ BẢNG PHÂN BỐ XÁC SUẤT CỦA NÓ

**HĐ1.** Hình thành khái niệm biến ngẫu nhiên rời rạc

Gieo một xúc xắc cân đối, đồng chất liên tiếp 6 lần. Gọi X là số lần xúc xắc xuất hiện mặt 6 chấm trong 6 lần gieo liên tiếp đó.

a) Các giá trị có thể của X là gì?

b) Trước khi thực hiện việc gieo xúc xắc đó, ta có khẳng định trước được X sẽ nhận giá trị nào không?

> Đại lượng X được gọi là một biến ngẫu nhiên rời rạc nếu nó nhận một số hữu hạn các giá trị có thể. Các giá trị đó là các số và không dự đoán được trước khi phép thử được thực hiện.

**Ví dụ 1.** Tung một đồng xu cân đối, đồng chất liên tiếp 3 lần. Gọi X là số lần đồng xu xuất hiện mặt ngửa.

a) X có là một biến ngẫu nhiên rời rạc hay không?
b) Liệt kê các giá trị có thể của X và tính các xác suất để X nhận các giá trị đó.

**Giải**

a) Vì X chỉ nhận một số hữu hạn giá trị là 0, 1, 2, 3 và không dự đoán trước được khi tung đồng xu nên X là một biến ngẫu nhiên rời rạc.
b) Các giá trị có thể của biến ngẫu nhiên rời rạc X là một số thuộc tập $A = \{0; 1; 2; 3\}$.

Ta phải tính các xác suất $P(X = 0)$; $P(X = 1)$; $P(X = 2)$; $P(X = 3)$, trong đó:

$P(X = 0)$ là xác suất để không có lần xuất hiện mặt ngửa;

$P(X = 1)$ là xác suất để có đúng 1 lần xuất hiện mặt ngửa;

$P(X = 2)$ là xác suất để có đúng 2 lần xuất hiện mặt ngửa;

$P(X = 3)$ là xác suất để cả ba lần đều xuất hiện mặt ngửa.

Không gian mẫu $\Omega = \{\mathrm{SSN}; \mathrm{SNN}; \mathrm{NSN}; \mathrm{NNN}; \mathrm{SSS}; \mathrm{SNS}; \mathrm{NSS}; \mathrm{NNS}\}$, $n(\Omega) = 8$.

Biến cố $\{X = 0\}$ là biến cố: "Không có lần nào xuất hiện mặt ngửa".

$\{X = 0\}$ là tập $\{\mathrm{SSS}\}$ có 1 phần tử. Vậy $P(X = 0) = \frac{1}{8}$.Biến cố $\{X = 1\}$ là biến cố: "Có đúng 1 lần xuất hiện mặt ngửa".

$\{X = 1\}$ là tập $\{\mathrm{SSN}; \mathrm{SNS}; \mathrm{NSS}\}$ có 3 phần tử. Vậy $P(X = 1) = \frac{3}{8}$.

Biến cố $\{X = 2\}$ là biến cố: "Có đúng 2 lần xuất hiện mặt ngửa".

$\{X = 2\}$ là tập $\{\mathrm{SNN}; \mathrm{NSN}; \mathrm{NNS}\}$ có 3 phần tử. Vậy $P(X = 2) = \frac{3}{8}$.

Biến cố $\{X = 3\}$ là biến cố: "Cả ba lần xuất hiện mặt ngửa".

$\{X = 3\}$ là tập $\{\mathrm{NNN}\}$ có 1 phần tử. Vậy $P(X = 3) = \frac{1}{8}$.

Giả sử $X$ là một biến ngẫu nhiên rời rạc nhận các giá trị $x_1, x_2, \ldots, x_{n-1}, x_n$ với các xác suất tương ứng là $p_1, p_2, \ldots, p_{n-1}, p_n$, tức là $P(X = x_i) = p_i$ ($i = 1, 2, \ldots, n$).

Bảng sau đây được gọi là bảng phân bố xác suất của biến ngẫu nhiên rời rạc $X$:

|  X | x_{1} | x_{2} | ... | x_{n-1} | x_{n}  |
| --- | --- | --- | --- | --- | --- |
|  P | p_{1} | p_{2} | ... | p_{n-1} | p_{n}  |

**HĐ2.** Củng cố khái niệm bảng phân bố xác suất của biến ngẫu nhiên rời rạc

Hãy nêu số thích hợp với dấu "?" để hoàn thành bảng phân bố xác suất của biến ngẫu nhiên rời rạc $X$ trong Ví dụ 1.

|  X | 0 | 1 | 2 | 3  |
| --- | --- | --- | --- | --- |
|  P | ? | ? | ? | ?  |

Trong bảng phân bố xác suất của biến ngẫu nhiên rời rạc $X$, ta có:

$$
p_1 + p_2 + \cdots + p_{n-1} + p_n = 1.
$$

**Ví dụ 2.** Cho biến ngẫu nhiên rời rạc $X$ với bảng phân bố xác suất như sau:

|  X | 1 | 2 | 3 | 4  |
| --- | --- | --- | --- | --- |
|  P | a | a | 3a | 3a  |

Tìm $a$.

**Giải**

Ta có $a + a + 3a + 3a = 1$. Suy ra $a = \frac{1}{8}$.

**Ví dụ 3.** Giả sử số vụ vi phạm Luật Giao thông trên một đoạn đường vào tối thứ Bảy là một biến ngẫu nhiên rời rạc $X$ với bảng phân bố xác suất như sau:

|  X | 0 | 1 | 2 | 3 | 4 | 5  |
| --- | --- | --- | --- | --- | --- | --- |
|  P | 0,1 | 0,2 | 0,3 | 0,2 | 0,15 | 0,05  |

Tính xác suất để tối thứ Bảy:

a) Xảy ra nhiều nhất 1 vụ vi phạm Luật Giao thông;
b) Xảy ra ít nhất 3 vụ vi phạm Luật Giao thông;
c) Xảy ra ít nhất 2 vụ vi phạm Luật Giao thông.

**Giải**

a) Gọi $A$ là biến cố: “Xảy ra nhiều nhất 1 vụ vi phạm Luật Giao thông vào tối thứ Bảy”. Khi đó, $A$ là hợp của hai biến cố xung khắc: $\{X = 0\}$ và $\{X = 1\}$. Tức là $A = \{X = 0\} \cup \{X = 1\}$.

Theo quy tắc cộng xác suất, ta có:

$$
P(A) = P(X = 0) + P(X = 1) = 0,1 + 0,2 = 0,3.
$$

b) Gọi $B$ là biến cố: “Xảy ra ít nhất 3 vụ vi phạm Luật Giao thông vào tối thứ Bảy”;

$C$ là biến cố: “Xảy ra 4 hoặc 5 vụ vi phạm Luật Giao thông vào tối thứ Bảy”.

Khi đó, $B$ là hợp của hai biến cố xung khắc: biến cố $\{X = 3\}$ và biến cố $C$. Theo quy tắc cộng xác suất, ta có:

$$
P(B) = P(X = 3) + P(C).
$$

Biến cố $C$ là hợp của hai biến cố xung khắc: $\{X = 4\}$ và $\{X = 5\}$. Theo quy tắc cộng xác suất, ta có:

$$
P(C) = P(X = 4) + P(X = 5).
$$

Do đó

$$
P(B) = P(X = 3) + P(C) = P(X = 3) + P(X = 4) + P(X = 5) = 0,2 + 0,15 + 0,05 = 0,4.
$$

c) Gọi $D$ là biến cố: “Xảy ra ít nhất 2 vụ vi phạm Luật Giao thông vào tối thứ Bảy”. Suy ra $D$ là biến cố đối của biến cố $A$. Vậy $P(D) = 1 - P(A) = 1 - 0,3 = 0,7$.

**Ví dụ 4.** Một túi đựng 6 viên bi đỏ và 4 viên bi xanh. Các viên bi có cùng kích thước và khối lượng. Lấy ngẫu nhiên đồng thời 3 viên bi từ trong túi. Gọi $X$ là số viên bi xanh trong 3 viên bi lấy ra. Lập bảng phân bố xác suất của $X$.

**Giải**

Các giá trị có thể của $X$ thuộc tập $\{0; 1; 2; 3\}$.

Tiếp theo, ta cần tính $P(X = 0)$, $P(X = 1)$, $P(X = 2)$, $P(X = 3)$.

Số kết quả có thể là $C_{10}^3 = 120$.

- Tính $P(X = 0)$: Biến cố $\{X = 0\}$ là: “Lấy được 3 viên bi đỏ”.

Số kết quả thuận lợi cho biến cố $\{X = 0\}$ là $C_6^3 = 20$. Do đó $P(X = 0) = \frac{20}{120} = \frac{1}{6}$.

- Tính $P(X = 1)$: Biến cố $\{X = 1\}$ là: “Lấy được 1 viên bi xanh và 2 viên bi đỏ”.

Có $C_4^1 = 4$ cách chọn 1 viên bi xanh trong 4 viên bi xanh và $C_6^2 = 15$ cách chọn 2 viên bi đỏ trong 6 viên bi đỏ.

Theo quy tắc nhân ta có $4 \cdot 15 = 60$ cách chọn 1 viên bi xanh và 2 viên bi đỏ.

Số kết quả thuận lợi cho biến cố $\{X = 1\}$ là 60. Do đó $P(X = 1) = \frac{60}{120} = \frac{1}{2}$.

- Tính $P(X = 2)$: Biến cố $\{X = 2\}$ là: “Lấy được 2 viên bi xanh và 1 viên bi đỏ”.

Có $C_4^2 = 6$ cách chọn 2 viên bi xanh trong 4 viên bi xanh và $C_6^1 = 6$ cách chọn 1 viên bi đỏ trong 6 viên bi đỏ.

Theo quy tắc nhân ta có $6 \cdot 6 = 36$ cách chọn 2 viên bi xanh và 1 viên bi đỏ.

Số kết quả thuận lợi cho biến cố $\{X = 2\}$ là 36. Do đó $P(X = 2) = \frac{36}{120} = \frac{3}{10}$.

- Tính $P(X = 3)$: Biến cố $\{X = 3\}$ là: “Lấy được 3 viên bi xanh”.

Số kết quả thuận lợi cho biến cố $\{X = 3\}$ là $C_4^3 = 4$. Do đó $P(X = 3) = \frac{4}{120} = \frac{1}{30}$.

Bảng phân bố xác suất của X là:

|  X | 0 | 1 | 2 | 3  |
| --- | --- | --- | --- | --- |
|  P | $\frac{1}{6}$ | $\frac{1}{2}$ | $\frac{3}{10}$ | $\frac{1}{30}$  |

**Luyện tập 1.** Một tố có 10 học sinh nam và 6 học sinh nữ. Giáo viên chọn ngẫu nhiên đồng thời 3 học sinh. Gọi X là số học sinh nam trong 3 học sinh được chọn. Lập bảng phân bố xác suất của X.

**Vận dụng 1.** Một trò chơi sử dụng một hộp đựng 20 quả cầu có kích thước và khối lượng như nhau được ghi số từ 1 đến 20. Người chơi lấy ngẫu nhiên đồng thời 3 quả cầu trong hộp. Gọi X là số lớn nhất ghi trên 3 quả cầu đã lấy ra.

a) Lập bảng phân bố xác suất của X.

b) Người chơi thắng cuộc nếu trong 3 quả cầu lấy ra có ít nhất 1 quả cầu ghi số lớn hơn 18. Tính xác suất thắng của người chơi.

**Hướng dẫn**

a) Tập các giá trị có thể của X là $\{3; 4; \ldots; 20\}$. Ta tính $P(X = k)$, với $k \in \{3; 4; \ldots; 20\}$.

Số kết quả có thể là $C_{20}^{3} = 1140$.

Biến cố $\{X = k\}$ là biến cố: "Trong 3 quả cầu lấy ra có một quả cầu đánh số $k$ và 2 quả cầu đánh số nhỏ hơn $k$". Số kết quả thuận lợi là $C_{k-1}^{2}$.

$$
\text{Vậy } P(X = k) = \frac{C_{k-1}^{2}}{C_{20}^{3}} = \frac{(k-1)(k-2)}{2 \cdot 1140} = \frac{(k-1)(k-2)}{2280}.
$$

b) Biến cố "Người chơi thắng" là biến cố hợp của hai biến cố $\{X = 19\}$ và $\{X = 20\}$.

### 2. CÁC SỐ ĐẶC TRƯNG CỦA BIỆN NGẪU NHIÊN RỜI RẠC

#### a) Kì vọng

**HĐ3.** Hình thành khái niệm kì vọng

Giả sử số vụ vi phạm Luật Giao thông trên một đoạn đường AB trong 98 buổi tối thứ Bảy được thống kê như sau: 10 tối không có vụ nào; 20 tối có 1 vụ; 23 tối có 2 vụ; 25 tối có 3 vụ; 15 tối có 4 vụ; 5 tối có 7 vụ. Hỏi trung bình có bao nhiêu vụ vi phạm Luật Giao thông trên đoạn đường AB trong 98 buổi tối thứ Bảy đó?

Để có một ý niệm về độ lớn trung bình của biến ngẫu nhiên X ta có khái niệm kì vọng của X.

Cho X là một biến ngẫu nhiên rời rạc với bảng phân bố xác suất:

|  X | $x_1$ | $x_2$ | ... | $x_{n-1}$ | $x_n$  |
| --- | --- | --- | --- | --- | --- |
|  P | $p_1$ | $p_2$ | ... | $p_{n-1}$ | $p_n$  |

Kì vọng của X, kí hiệu là $E(X)$, là một số được tính theo công thức sau:

$$
E(X) = x_1 p_1 + x_2 p_2 + \cdots + x_{n-1} p_{n-1} + x_n p_n.
$$10

**Nhận xét**

- Kì vọng $E(X)$ là một số cho ta một ý niệm về độ lớn trung bình của $X$ nên kì vọng $E(X)$ còn được gọi là giá trị trung bình của $X$.
- $E(X)$ được tính thông qua bảng phân bố xác suất của $X$.
- $E(X)$ không nhất thiết thuộc tập các giá trị có thể của $X$.

**Ví dụ 5.** Trong mỗi buổi ông An đi câu cá, ông có thể câu được 0; 1; 2; 3; 4 con cá với các xác suất tương ứng là 0,16; 0,17; 0,25; 0,28 và 0,13. Hỏi trung bình ông An câu được bao nhiêu cá trong một buổi đi câu?

**Giải**

Gọi $X$ là số con cá ông An câu được trong một buổi câu.

Theo giả thiết $X$ là biến ngẫu nhiên rời rạc có bảng phân bố xác suất như sau:

|  X | 0 | 1 | 2 | 3 | 4  |
| --- | --- | --- | --- | --- | --- |
|  P | 0,16 | 0,18 | 0,25 | 0,28 | 0,13  |

Ta có:

$$
E(X) = 0 \cdot 0,16 + 1 \cdot 0,18 + 2 \cdot 0,25 + 3 \cdot 0,28 + 4 \cdot 0,13 = 2,04.
$$

Vậy trung bình ông An câu được 2,04 con cá trong một buổi đi câu.

**Luyện tập 2.** Giả sử số vụ vi phạm Luật Giao thông trên một đoạn đường vào tối thứ Bảy có thể là 0; 1; 2; 3; 4; 5 với các xác suất tương ứng là 0,1; 0,2; 0,25; 0,25; 0,15 và 0,05. Hỏi trung bình có bao nhiêu vụ vi phạm Luật Giao thông trên đoạn đường đó vào tối thứ Bảy?

**Ví dụ 6.** Trở lại tình huống mở đầu. Giả sử ở vòng 1 bạn Minh bốc ngẫu nhiên một câu hỏi loại I. Hỏi trung bình Minh nhận được bao nhiêu điểm?

**Giải**

Gọi $X$ là số điểm Minh nhận được. Số điểm trung bình mà Minh nhận được là $E(X)$.

Gọi $A$ là biến cố: “Minh trả lời đúng câu hỏi loại I”; $B$ là biến cố: “Minh trả lời đúng câu hỏi loại II”. Ta có $P(A) = 0,8$; $P(B) = 0,6$.

- Vòng 1: Minh bốc ngẫu nhiên một câu hỏi loại I. Có hai khả năng:
    - Nếu trả lời sai thì Minh nhận 0 điểm. Cuộc chơi kết thúc tại đây. Ta có $\{X = 0\} = \overline{A}$. Do đó $P(X = 0) = P(\overline{A}) = 1 - P(A) = 1 - 0,8 = 0,2$.
    - Nếu trả lời đúng thì Minh nhận 20 điểm và Minh sẽ bước vào vòng 2.
- Vòng 2: Minh bốc ngẫu nhiên một câu hỏi loại II. Khi đó có hai khả năng:
    + Nếu trả lời sai, Minh không có điểm và phải dừng cuộc chơi với tổng số điểm nhận được là: $20 + 0 = 20$ (điểm).

Ta có $\{X = 20\} = A\overline{B}$. Theo giả thiết $A$ và $B$ là hai biến cố độc lập nên $A$ và $\overline{B}$ cũng độc lập. Theo công thức nhân xác suất cho hai biến cố độc lập ta có:

$$
P(X = 20) = P(A\overline{B}) = P(A) \cdot P(\overline{B}) = 0,8 \cdot (1 - 0,6) = 0,32.
$$

+ Nếu trả lời đúng Minh nhận 80 điểm. Cuộc thi kết thúc tại đây và tổng số điểm Minh nhận được là: $20 + 80 = 100$ (điểm).

Ta có $\{X = 100\} = AB$. Theo giả thiết $A$ và $B$ là hai biến cố độc lập. Theo công thức nhân xác suất cho hai biến cố độc lập ta có:

$$
P(X = 100) = P(AB) = P(A) \cdot P(B) = 0,8 \cdot 0,6 = 0,48.
$$

Bảng phân bố xác suất của X:

|  X | 0 | 20 | 100  |
| --- | --- | --- | --- |
|  P | 0,2 | 0,32 | 0,48  |

Từ đó $E(X) = 0 \cdot 0,2 + 20 \cdot 0,32 + 100 \cdot 0,48 = 54,4$.

Vậy trung bình Minh được 54,4 điểm.

**Vận dụng 2.** Tiếp tục xét tính huống mở đầu, giả sử ở vòng 1 Minh chọn câu hỏi loại II.

a) Hỏi trung bình Minh nhận được bao nhiêu điểm?

b) Ở vòng 1 Minh nên chọn loại câu hỏi nào?

**Hướng dẫn**

Gọi Y là số điểm Minh nhận được. Số điểm trung bình Minh nhận được là $E(Y)$. Tương tự như Ví dụ 6, ta lập bảng phân bố xác suất của Y từ đó tính được $E(Y)$.

Nếu $E(Y) < E(X)$ thì ở vòng 1 Minh nên chọn câu hỏi loại I.

Nếu $E(Y) > E(X)$ thì ở vòng 1 Minh nên chọn câu hỏi loại II.

#### b) Phương sai và độ lệch chuẩn

**HĐ4.** Hình thành khái niệm phương sai

Một nhà đầu tư xem xét hai phương án đầu tư. Với phương án 1 thì doanh thu một năm sẽ là 8 tỉ đồng hoặc 2 tỉ đồng với xác suất tương ứng là $\frac{1}{3}$ và $\frac{2}{3}$. Với phương án 2 thì doanh thu một năm sẽ là 5 tỉ đồng hoặc 3 tỉ đồng với hai xác suất bằng nhau.

a) Hãy so sánh doanh thu trung bình của phương án 1 và phương án 2.

b) Nhà đầu tư nên chọn phương án nào?

Cho X là một biến ngẫu nhiên rời rạc. Để có một ý niệm về mức độ phân tán các giá trị của X xung quanh kì vọng $E(X)$, ta có khái niệm phương sai và độ lệch chuẩn sau đây:

Cho X là một biến ngẫu nhiên rời rạc với bảng phân bố xác suất như sau:

|  X | X_{1} | X_{2} | ... | X_{n-1} | X_{n}  |
| --- | --- | --- | --- | --- | --- |
|  P | P_{1} | P_{2} | ... | P_{n-1} | P_{n}  |

1) Phương sai của X, kí hiệu là $V(X)$, là một số được tính theo công thức sau:

$$
V(X) = (x_1 - \mu)^2 \cdot p_1 + (x_2 - \mu)^2 \cdot p_2 + \cdots + (x_{n-1} - \mu)^2 \cdot p_{n-1} + (x_n - \mu)^2 \cdot p_n \tag{1}
$$

trong đó $\mu = E(X)$.

2) Độ lệch chuẩn của X, kí hiệu là $\sigma(X)$, là căn bậc hai số học của phương sai:

$$
\sigma(X) = \sqrt{V(X)}.
$$

> Trở lại HĐ4. Gọi X và Y tương ứng là doanh thu theo phương án 1 và phương án 2. Tính độ lệch chuẩn của X và Y

**Nhận xét**

- $V(X)$ còn có thể tính theo công thức sau:

$$
V(X) = x_1^2 p_1 + x_2^2 p_2 + \cdots + x_{n-1}^2 p_{n-1} + x_n^2 p_n - \mu^2. \tag{2}
$$

Công thức trên giúp ta tính $V(X)$ nhanh hơn công thức (1) vì bớt đi được $n$ phép trừ.

- Phương sai $V(X)$ là một số không âm. Nó cho ta một ý niệm về mức độ phân tán các giá trị của $X$ xung quanh kí vọng $E(X)$. Phương sai càng lớn thì độ phân tán càng lớn.

- Cũng như phương sai, độ lệch chuẩn $\sigma(X)$ cho ta một ý niệm về mức độ phân tán các giá trị của $X$ xung quanh kí vọng $E(X)$.

- Phương sai không có cùng đơn vị đo với $X$, còn độ lệch chuẩn có cùng đơn vị đo với $X$.

**Ví dụ 7.** Cho biến ngẫu nhiên rời rạc $X$ với bảng phân bố xác suất:

|  X | 0 | 1 | 2 | 3 | 4 | 5  |
| --- | --- | --- | --- | --- | --- | --- |
|  P | 0,1 | 0,2 | 0,3 | 0,2 | 0,1 | 0,1  |

a) Tính $V(X)$ và $\sigma(X)$ theo định nghĩa.

b) Tính $V(X)$ theo công thức (2).

**Giải**

a) Ta có

$$
E(X) = 0 \cdot 0,1 + 1 \cdot 0,2 + 2 \cdot 0,3 + 3 \cdot 0,2 + 4 \cdot 0,1 + 5 \cdot 0,1 = 2,3.
$$

Theo định nghĩa phương sai, ta có:

$$
\begin{aligned}
V(X) &= (0 - 2,3)^2 \cdot 0,1 + (1 - 2,3)^2 \cdot 0,2 + (2 - 2,3)^2 \cdot 0,3 + (3 - 2,3)^2 \cdot 0,2 \\
&\quad + (4 - 2,3)^2 \cdot 0,1 + (5 - 2,3)^2 \cdot 0,1 \\
&= 2,01.
\end{aligned}
$$

$$
\sigma(X) = \sqrt{2,3} \approx 1,418.
$$

b) Theo công thức (2), ta có:

$$
V(X) = 0^2 \cdot 0,1 + 1^2 \cdot 0,2 + 2^2 \cdot 0,3 + 3^2 \cdot 0,2 + 4^2 \cdot 0,1 + 5^2 \cdot 0,1 - 2,3^2 = 2,01.
$$

**Luyện tập 3.** Cho biến ngẫu nhiên rời rạc $X$ với bảng phân bố xác suất như sau:

|  X | 0 | 1 | 2 | 3 | 4  |
| --- | --- | --- | --- | --- | --- |
|  P | 0,16 | 0,18 | 0,25 | 0,28 | 0,13  |

a) Tính $V(X)$ và $\sigma(X)$ theo định nghĩa.

b) Tính $V(X)$ theo công thức (2).

### BÀI TẬP

1.1. Giả sử số ca cấp cứu ở một bệnh viện vào tối thứ Bảy là một biến ngẫu nhiên rời rạc X có bảng phân bố xác suất như sau:

|  X | 0 | 1 | 2 | 3 | 4 | 5  |
| --- | --- | --- | --- | --- | --- | --- |
|  P | 0,12 | 0,28 | 0,31 | 0,19 | 0,08 | 0,02  |

a) Tính xác suất để xảy ra ít nhất một ca cấp cứu ở bệnh viện đó vào tối thứ Bảy.
b) Biết rằng nếu có hơn 3 ca cấp cứu thì bệnh viện phải tăng cường thêm bác sĩ trực. Tính xác suất phải tăng cường bác sĩ trực vào tối thứ Bảy ở bệnh viện đó.
c) Tính $E(X)$, $V(X)$ và $\sigma(X)$.

1.2. Số cuộc điện thoại gọi đến một trung tâm cứu hộ trong khoảng thời gian từ 12 giờ đến 13 giờ là một biến ngẫu nhiên rời rạc X có bảng phân bố xác suất như sau:

|  X | 0 | 1 | 2 | 3 | 4 | 5  |
| --- | --- | --- | --- | --- | --- | --- |
|  P | 0,25 | 0,2 | 0,15 | 0,15 | 0,13 | 0,12  |

a) Tính xác suất để xảy ra ít nhất 2 cuộc gọi đến trung tâm cứu hộ đó.
b) Tính xác suất để xảy ra nhiều nhất 3 cuộc gọi đến trung tâm cứu hộ đó.
c) Tính $E(X)$, $V(X)$ và $\sigma(X)$.

1.3. Một túi gồm các tấm thẻ giống hệt nhau chỉ khác màu, trong đó có 10 tấm thẻ màu đỏ và 6 tấm thẻ màu xanh. Rút ngẫu nhiên đồng thời ra 3 tấm thẻ từ trong túi.

a) Gọi X là số thẻ đỏ trong ba thẻ rút ra. Lập bảng phân bố xác suất của X. Tính $E(X)$.
b) Giả sử rút mỗi tấm thẻ màu đỏ được 5 điểm và rút mỗi tấm thẻ màu xanh được 8 điểm. Gọi Y là số điểm thu được sau khi rút 3 tấm thẻ từ trong túi. Lập bảng phân bố xác suất của Y.

1.4. Hai xạ thủ An và Bình tập bắn một cách độc lập với nhau. Mỗi người thực hiện hai phát bắn một cách độc lập. Xác suất bắn trúng bia của An và của Bình trong mỗi phát bắn tương ứng là 0,4 và 0,5.

Gọi X là số phát bắn trúng bia của An, Y là số phát bắn trúng bia của Bình.

a) Lập bảng phân bố xác suất của X, Y.
b) Tính $E(X)$, $E(Y)$, $V(X)$, $V(Y)$.

1.5. Trong một chiếc hộp có 10 quả cầu có kích thước và khối lượng giống nhau, trong đó có 4 quả ghi số 1; 3 quả ghi số 2; 2 quả ghi số 3 và 1 quả ghi số 4. Lấy ngẫu nhiên đồng thời hai quả cầu rồi cộng hai số trên hai quả cầu với nhau. Gọi X là kết quả thu được. Lập bảng phân bố xác suất của X.14

### Em có biết?

Biến ngẫu nhiên nhận một số vô hạn các giá trị có thể

Bạn Tùng gieo một con xúc xắc cân đối liên tiếp một cách độc lập cho đến khi nào xuất hiện mặt 6 chấm thì dừng lại. Gọi X là số lần gieo cần thiết để xuất hiện mặt 6 chấm. Các giá trị có thể của X là các số nguyên dương 1; 2; 3;... và không dự đoán trước được trước khi Tùng thực hiện việc gieo con xúc xắc. Như vậy X là một biến ngẫu nhiên nhận một số vô hạn các giá trị có thể.

Ta hãy tính $P(X = k)$ ($k \in \mathbb{N}^*$) với $\{X = k\}$ là biến cố: “$k - 1$ lần gieo đầu tiên không xuất hiện mặt 6 chấm và lần gieo thứ $k$ xuất hiện mặt 6 chấm”.

Gọi $B_k$ là biến cố: “$k$ lần gieo đầu tiên không xuất hiện mặt 6 chấm”; $A_k$ là biến cố: “Lần gieo thứ $k$ xuất hiện mặt 6 chấm”. Khi đó $\{X = k\} = B_{k-1}A_k$.

Theo công thức nhân xác suất: $P(X = k) = P(B_{k-1}A_k) = P(B_{k-1}) \cdot P(A_k) = P(B_{k-1}) \cdot \frac{1}{6}$. (1)

Ta chứng minh $P(B_k) = \left(\frac{5}{6}\right)^k$. (2)

Chứng minh bằng quy nạp. Bước cơ sở: Với $k = 1$ công thức (2) hiển nhiên đúng.

Bước quy nạp: Giả sử khẳng định đúng với $k$. Ta phải chứng minh khẳng định đúng với $k + 1$. Ta có $B_{k+1} = B_k \overline{A_{k+1}}$. Theo công thức nhân xác suất và giả thiết quy nạp suy ra

$$
P(B_{k+1}) = P\left(B_k \overline{A_{k+1}}\right) = P(B_k) \cdot P\left(\overline{A_{k+1}}\right) = \left(\frac{5}{6}\right)^k \cdot \frac{5}{6} = \left(\frac{5}{6}\right)^{k+1}.
$$

Vậy khẳng định đúng với $k + 1$. Theo nguyên lí quy nạp, (2) đúng với mọi $k \in \mathbb{N}^*$.

Từ (1) và (2) ta suy ra $P(X = k) = \left(\frac{5}{6}\right)^{k-1} \cdot \frac{1}{6}$.

## Bài 2 BIẾN NGẪU NHIÊN CÓ PHÂN BỐ NHỊ THỨC VÀ ÁP DỤNG

**THUẬT NGỮ**

- Phép thử lặp
- Công thức Bernoulli
- Biến ngẫu nhiên có phân bố nhị thức với tham số $(n, p)$

**KIẾN THỨC, KĨ NĂNG**

- Nhận biết khái niệm phép thử lặp.
- Nhận biết công thức Bernoulli.
- Vận dụng công thức Bernoulli trong một số tình huống đơn giản.
- Nhận biết khái niệm biến ngẫu nhiên có phân bố nhị thức với tham số $(n, p)$.
- Vận dụng phân bố nhị thức để giải quyết một số bài toán có nội dung thực tiễn.

### 1. PHÉP THỬ LẶP VÀ CÔNG THỨC BERNOULLI

Khi mua vé tham gia một trò chơi, người chơi được chọn một trong hai phương án sau:

- Phương án 1: Người chơi gieo một xúc xắc cân đối, đồng chất một cách độc lập liên tiếp 12 lần. Người chơi thắng nếu có ít nhất hai lần xúc xắc xuất hiện mặt 6 chấm.
- Phương án 2: Người chơi gieo một xúc xắc cân đối, đồng chất một cách độc lập liên tiếp 6 lần. Người chơi thắng nếu có ít nhất một lần xúc xắc xuất hiện mặt 6 chấm.

Hỏi người chơi nên chọn phương án nào để xác suất thắng cao hơn?

**HĐ1.** Hình thành khái niệm phép thử lặp và công thức Bernoulli

Trong tình huống mở đầu, Xét phép thử $T$ là gieo một xúc xắc cân đối, đồng chất. Gọi $E$ là biến cố: “Xúc xắc xuất hiện mặt 6 chấm”.

a) Trong phương án 1, phép thử $T$ được lặp lại bao nhiêu lần? Người chơi thắng khi biến cố $E$ xuất hiện bao nhiêu lần?

b) Cũng hỏi như trên với phương án 2.

> Xét phép thử $T$ và $E$ là một biến cố liên quan tới phép thử $T$. Ở mỗi lần thực hiện phép thử $T$, biến cố $E$ có xác suất xuất hiện bằng $p$, tức là $P(E) = p$, $0 < p < 1$.
>
>Ta thực hiện phép thử $T$ lặp lại $n$ lần một cách độc lập, tức là các lần lặp này không ảnh hưởng lẫn nhau.
>
>Phép thử $T$ thực hiện lặp lại nhiều lần một cách độc lập gọi là **phép thử lặp**.
>
>Kí hiệu $E_k$ là biến cố: “Trong phép thử lặp này, biến cố $E$ xuất hiện đúng $k$ lần ($0 \leq k \leq n$)”. Khi đó
>
>$$P(E_k) = C_n^k \cdot p^k (1 - p)^{n - k}.$$
>
>Công thức trên được gọi là **công thức Bernoulli**.

**Ví dụ 1.** Xác suất thành công khi làm một thí nghiệm $T$ là 0,4. Một nhóm gồm 9 học sinh độc lập với nhau tiến hành thí nghiệm $T$. Tính xác suất để:

a) Có đúng 6 học sinh thực hiện thí nghiệm thành công;

b) Có ít nhất 1 học sinh thực hiện thí nghiệm thành công;

c) Có nhiều nhất 7 học sinh thực hiện thí nghiệm thành công.

**Giải**

Gọi $E$ là biến cố: “Thí nghiệm $T$ thành công”. Ta có $P(E) = 0,4$; $n = 9$.

a) Gọi $E_k$ ($0 \leq k \leq 6$) là biến cố: “Có đúng $k$ học sinh thực hiện thành công”.

Theo công thức Bernoulli ta có:

$$
P(E_6) = C_9^6 \cdot 0,4^6 \cdot 0,6^3 = 84 \cdot 0,4^6 \cdot 0,6^3 \approx 0,0743.
$$

b) Gọi $M$ là biến cố: “Có ít nhất 1 học sinh thực hiện thí nghiệm thành công”.

Biến cố đối $\overline{M}$ của $M$ là: “Không có học sinh nào thực hiện thí nghiệm thành công”, hay $\overline{M} = E_0$.

Vậy $P(M) = 1 - P(\overline{M}) = 1 - P(E_0) = 1 - 0,6^9 \approx 0,9899$.

c) Gọi $N$ là biến cố: “Có nhiều nhất 7 học sinh thực hiện thí nghiệm thành công”.

Biến cố đối $\overline{N}$ của $N$ là biến cố: “Có 8 học sinh hoặc 9 học sinh thực hiện thí nghiệm thành công”, tức là xảy ra một trong các biến cố $E_8$ hoặc $E_9$, hay $\overline{N} = E_8 \cup E_9$.

Vậy:

$$
\begin{array}{l}
P(\overline{N}) = P(E_8 \cup E_9) = P(E_8) + P(E_9) = C_9^8 \cdot 0,4^8 \cdot 0,6 + 0,4^9 \approx 0,0038 \\
\Rightarrow P(N) = 1 - P(\overline{N}) \approx 1 - 0,0038 = 0,9962.
\end{array}
$$

**Luyện tập 1.** Hai bạn $An$ và $Bình$ thì đấu bóng bàn. Xác suất thắng của $An$ trong một ván là 0,4. Hai bạn thi đấu đủ 3 ván đấu. Người nào có số ván đấu thắng nhiều hơn là người thắng trận đấu đó. Giả sử các ván đấu là độc lập. Tính xác suất để $An$ thắng trong trận đấu.

**Ví dụ 2.** Trở lại tình huống mở đầu. Tính xác suất thắng của người chơi khi chọn chơi theo phương án 1.

**Giải**

Gọi $T$ là phép thử: “Gieo một xúc xắc cân đối, đồng chất”; $E$ là biến cố: “Xúc xắc xuất hiện mặt 6 chấm”.

Xét phép thử lập với $n = 12$ và $p = P(E) = \frac{1}{6}$.

Gọi $B$ là biến cố: “Người chơi thắng”. $B$ cũng là biến cố: “Trong phép thử lập $T$, với $n = 12$, biến cố $E$ xuất hiện ít nhất hai lần”.

Xét biến cố đối $\overline{B}$: “Trong phép thử lập $T$, biến cố $E$ xuất hiện nhiều nhất một lần”. Ta có $\overline{B} = E_0 \cup E_1$. Theo quy tắc cộng xác suất và công thức Bernoulli, ta có:

$$
P(\overline{B}) = P(E_0 \cup E_1) = P(E_0) + P(E_1) = \left(\frac{5}{6}\right)^{12} + C_{12}^1 \left(\frac{1}{6}\right)^1 \cdot \left(\frac{5}{6}\right)^{11}.
$$Suy ra:

$$
P(B) = 1 - P(\overline{B}) = 1 - \left(\frac{5}{6}\right)^{12} - 12 \cdot \frac{1}{6} \cdot \left(\frac{5}{6}\right)^{11} = 1 - \frac{5^{12}}{6^{12}} - \frac{12 \cdot 5^{11}}{6^{12}} = \frac{6^{12} - 17 \cdot 5^{11}}{6^{12}} \approx 0,618667.
$$

Vậy xác suất thắng của người chơi khi chơi theo phương án 1 xấp xỉ 0,618667.

**Luyện tập 2.** Trở lại tình huống mở đầu.

a) Tính xác suất thắng của người chơi khi chơi theo phương án 2.
b) Qua các kết quả đã tính được, hãy cho biết người chơi nên chọn chơi theo phương án nào để xác suất thắng cao hơn.

### 2. BIẾN NGẪU NHIÊN CÓ PHÂN BỔ NHỊ THỨC VÀ ÁP DỤNG

Một bài thi trắc nghiệm có 10 câu hỏi, mỗi câu có 4 phương án trả lời, trong đó chỉ có một phương án đúng. Mỗi câu trả lời đúng được 1 điểm, mỗi câu trả lời sai không được điểm (0 điểm). Thí sinh vượt qua bài thi đó nếu đạt ít nhất 5 điểm. Bạn An làm hết 10 câu trong bài thi bằng cách mỗi câu đều chọn ngẫu nhiên một phương án. Hỏi:

a) Trung bình An được bao nhiêu điểm?
b) Xác suất để An vượt qua bài thi đó là bao nhiêu?

**HĐ2. Hình thành khái niệm biến ngẫu nhiên có phân bố nhị thức**

Cho $T$ là một phép thử và $E$ là một biến cố liên quan tới phép thử $T$. Ta thực hiện phép thử $T$ lặp lại $n$ lần một cách độc lập. Ở mỗi lần thực hiện phép thử $T$, biến cố $E$ có xác suất xuất hiện bằng $p$, tức là $P(E) = p, 0 < p < 1$. Gọi $X$ là số lần xuất hiện biến cố $E$ trong $n$ lần thực hiện lặp lại phép thử $T$. Tính $P(X = k)$ với mỗi $k \in \{0; 1, \ldots; n\}$.

Biến ngẫu nhiên rời rạc $X$ với tập các giá trị có thể là $\{0; 1; 2, \ldots; n\}$ và có bảng phân bố xác suất như sau:

|  X | 0 | 1 | ... | k | ... | n  |
| --- | --- | --- | --- | --- | --- | --- |
|  P | $(1-p)^n$ | $C^n_n \cdot p(1-p)^{n-1}$ | ... | $C^n_n \cdot p^k(1-p)^{n-k}$ | ... | $p^n$  |

Biến ngẫu nhiên $X$ như trên được gọi là biến ngẫu nhiên có phân bố nhị thức với tham số $(n, p)$, kí hiệu là $X \sim B(n, p)$.

Biến ngẫu nhiên $X$ có phân bố nhị thức với tham số $(1, p)$ được gọi là biến ngẫu nhiên có phân bố Bernoulli, kí hiệu là $X \sim \text{Ber}(p)$.

Viết bảng phân bố xác suất của biến ngẫu nhiên có phân bố Bernoulli.

**Nhận xét.** Cho $T$ là một phép thử và $E$ là một biến cố liên quan tới phép thử $T$. Ta thực hiện phép thử $T$ lặp lại $n$ lần một cách độc lập. Ở mỗi lần thực hiện phép thử $T$, biến cố $E$ có xác suất xuất hiện bằng $p$, $P(E) = p$. Gọi $X$ là số lần xuất hiện biến cố $E$ trong $n$ lần thực hiện lặp lại phép thử $T$. Khi đó $X \sim B(n, p)$.

**Chú ý về phân bố nhị thức**

Cho $X$ là biến ngẫu nhiên với $X \sim B(n, p)$. Khi đó, với mỗi số nguyên dương $k$ ($1 \leq k \leq n$) ta có:

a) $P(X \leq k) = C_n^0 (1 - p)^n + C_n^1 p(1 - p)^{n-1} + \cdots + C_n^k p^k (1 - p)^{n-k}$;

b) $P(X \geq k) = C_n^k p^k (1 - p)^{n-k} + C_n^{k+1} p^{k+1} (1 - p)^{n-k-1} + \cdots + C_n^n p^n$.

**Ví dụ 3.** Bạn Minh tham gia một trò chơi như sau:

Trên mặt sàn có vẽ một trục số (H.1.2). Ban đầu, Minh đứng tại vị trí 0 trên trục số và tung một đồng xu cân đối, đồng chất một cách độc lập. Nếu đồng xu ra mặt ngửa (kí hiệu là $N$) thì di chuyển 1 đơn vị theo chiều dương. Nếu đồng xu ra mặt sấp (kí hiệu là $S$) thì di chuyển 1 đơn vị theo chiều âm. Minh thực hiện 8 lần tung đồng xu một cách độc lập. Nếu Minh di chuyển được ít nhất 4 đơn vị theo chiều dương thì sẽ thắng cuộc. (Chẳng hạn, nếu kết quả 8 lần tung đồng xu là $N-S-N-N-N-N-N-N$ thì Minh thắng.)

Gọi $X$ là số lần đồng xu của Minh ra mặt ngửa.

a) Gọi tên phân bố xác suất của biến ngẫu nhiên $X$.

b) Tính xác suất thắng của Minh.

**Giải**

a) Phép thử $T$ là: “Tung đồng xu cân đối, đồng chất”. $E$ là biến cố: “Đồng xu ra mặt ngửa”. Ta có $P(E) = \frac{1}{2}$. $X$ là số lần xuất hiện biến cố $E$ trong 8 lần thực hiện lặp lại phép thử $T$ một cách độc lập. Theo Nhận xét (sau HĐ2), khi đó $X$ là biến ngẫu nhiên có phân bố nhị thức với $n = 8$; $p = \frac{1}{2}$.

b) Vì $X$ là số lần đồng xu của Minh ra mặt ngửa nên số lần đồng xu của Minh ra mặt sấp là $8 - X$. Minh di chuyển được $X - (8 - X) = 2X - 8$ đơn vị theo chiều dương.

Minh thắng cuộc nếu $2X - 8 \geq 4$, tức là $X \geq 6$.

Vậy xác suất để Minh thắng cuộc là $P(X \geq 6)$. Theo chú ý về phân bố nhị thức, ta có:

$$
P(X \geq 6) = C_6^6 \cdot \left(\frac{1}{2}\right)^8 + C_6^7 \cdot \left(\frac{1}{2}\right)^8 + C_6^8 \cdot \left(\frac{1}{2}\right)^8 = \frac{1}{256} \cdot (28 + 8 + 1) = \frac{37}{256} \approx 0,1445.
$$

**Luyện tập 3.** Khi tham gia một trò chơi, người chơi gieo một con xúc xắc cân đối, đồng chất một cách độc lập liên tiếp 5 lần. Mỗi lần gieo nếu số chấm xuất hiện lớn hơn 4 thì người chơi được 10 điểm. Tính xác suất để người chơi nhận được ít nhất 30 điểm.

**Chú ý.** Người ta chứng minh được rằng kì vọng, phương sai và độ lệch chuẩn của biến ngẫu nhiên $X - B(n,p)$ được cho bởi các công thức sau:

$$
\begin{array}{l}
E (X) = n \cdot p; \\
V (X) = n \cdot p \cdot (1 - p); \\
\sigma (X) = \sqrt {n \cdot p \cdot (1 - p)}.
\end{array}
$$

**Ví dụ 4.** Trong một trò chơi, người chơi gieo một xúc xắc cân đối, đồng chất liên tiếp 18 lần một cách độc lập. Người chơi thắng cuộc nếu có ít nhất 3 lần xúc xắc xuất hiện mặt 6 chấm. Gọi $X$ là số lần xúc xắc xuất hiện mặt 6 chấm.

a) Gọi tên phân bố xác suất của biến ngẫu nhiên $X$.

b) Tính xác suất để người chơi thắng cuộc.

c) Tính kì vọng, phương sai và độ lệch chuẩn của $X$.

**Giải**

a) Phép thử $T$ là: "Gieo con xúc xắc cân đối, đồng chất". $E$ là biến cố: "Con xúc xắc xuất hiện mặt 6 chấm".

Ta có $P(E) = \frac{1}{6}$. $X$ là số lần xuất hiện biến cố $E$ trong 18 lần thực hiện lặp lại phép thử $T$ một cách độc lập. Theo Nhận xét (sau HĐ2), khi đó $X$ là biến ngẫu nhiên có phân bố nhị thức với $n = 18$; $p = \frac{1}{6}$.

b) Gọi $E$ là biến cố "Người chơi thắng". Ta có $E = \{X \geq 3\}$.

Biến cố đối $\overline{E}$: "Người chơi thua cuộc" là biến cố $\{X \leq 2\}$.

Theo chú ý về phân bố nhị thức, ta có:

$$
P (X \leq 2) = \left(\frac {5}{6}\right) ^ {1 8} + C _ {1 8} ^ {1} \cdot \frac {1}{6} \cdot \left(\frac {5}{6}\right) ^ {1 7} + C _ {1 8} ^ {2} \cdot \left(\frac {1}{6}\right) ^ {2} \cdot \left(\frac {5}{6}\right) ^ {1 6}.
$$

Do đó

$$
\begin{array}{l}
P (E) = 1 - P (\overline {E}) = 1 - \left(\frac {5}{6}\right) ^ {1 8} - C _ {1 8} ^ {1} \cdot \frac {1}{6} \cdot \left(\frac {5}{6}\right) ^ {1 7} - C _ {1 8} ^ {2} \left(\frac {1}{6}\right) ^ {2} \cdot \left(\frac {5}{6}\right) ^ {1 6} \\
= 1 - \frac {5 ^ {1 8}}{6 ^ {1 8}} - \frac {1 8 \cdot 5 ^ {1 7}}{6 ^ {1 8}} - \frac {1 5 3 \cdot 5 ^ {1 6}}{6 ^ {1 8}} = \frac {6 ^ {1 8} - 5 ^ {1 6} - 1 8 \cdot 5 ^ {1 7} - 1 5 3 \cdot 5 ^ {1 6}}{6 ^ {1 8}} \approx 0,5973.
\end{array}
$$

c) Áp dụng công thức tính $E(X)$ và $V(X)$ ta có:

$$
\begin{array}{l}
E (X) = n \cdot p = 1 8 \cdot \frac {1}{6} = 3; \\
V (X) = n \cdot p (1 - p) = 1 8 \cdot \frac {1}{6} \cdot \frac {5}{6} = 2,5; \\
\sigma (X) = \sqrt {2 , 5} \approx 1,5811.
\end{array}
$$20

**Vận dụng.** Giải quyết bài toán ở tình huống mở đầu.

**Hướng dẫn**

a) Gọi X là số câu trả lời đúng của An. X là một biến ngẫu nhiên có phân bố nhị thức với tham số $n = 10$; $p = \frac{1}{4}$. Số điểm trung bình là $E(X)$. Vậy trung bình An nhận được $E(X) = np = 10 \cdot \frac{1}{4} = 2,5$ điểm.

b) An vượt qua bài thi khi làm đúng ít nhất 5 câu tức là khi $X \geq 5$. Theo chú ý về phân bố nhị thức, ta có:

$$
P(X \geq 5) = C_{10}^{6} \cdot \left(\frac{1}{4}\right)^{5} \cdot \left(\frac{3}{4}\right)^{5} + C_{10}^{6} \cdot \left(\frac{1}{4}\right)^{6} \cdot \left(\frac{3}{4}\right)^{4} + \cdots + C_{10}^{10} \cdot \left(\frac{1}{4}\right)^{10} \cdot \left(\frac{3}{4}\right)^{0} \approx 0,0781.
$$

Từ đó tính được xác suất vượt qua bài thi của An xấp xỉ 7,81%.

### BÀI TẬP

1.6. Tại một nhà máy sản xuất linh kiện điện tử, các linh kiện được xếp vào từng hộp một cách độc lập, mỗi hộp 10 linh kiện. Hộp được xếp loại I nếu hộp đó có nhiều nhất một linh kiện không đạt tiêu chuẩn. Biết rằng xác suất để nhà máy sản xuất ra một linh kiện điện tử không đạt tiêu chuẩn là 0,01. Hỏi tỉ lệ những hộp linh kiện điện tử loại I là bao nhiêu?

1.7. Một bài thi trắc nghiệm gồm 10 câu hỏi, mỗi câu có 4 phương án trả lời, trong đó chỉ có một phương án đúng. Mỗi câu trả lời đúng được 4 điểm, mỗi câu trả lời sai trừ 1 điểm. Một thí sinh làm bài bằng cách ở mỗi câu hỏi chọn ngẫu nhiên một phương án trả lời. Tính xác suất để thí sinh đó sau khi hoàn thành hết 10 câu trong bài thi, có kết quả:

a) 15 điểm;

b) Bị điểm âm.

1.8. Trong một trò chơi, mỗi ván người chơi gieo đồng thời 3 xúc xắc cân đối, đồng chất. Nếu có ít nhất 2 xúc xắc xuất hiện mặt 6 chấm thì người chơi giành chiến thắng ván chơi đó. Bác Hưng tham gia chơi 3 ván. Tính xác suất để bác Hưng thắng ít nhất 2 ván.

1.9. Màu hạt của đậu Hà Lan có hai kiểu hình: màu vàng và màu xanh. Có hai gene ứng với hai kiểu hình này là allele trội A và allele lặn a. Khi cho lại hai cây đậu Hà Lan, cây con lấy ngẫu nhiên một gene từ cây bố và một gene từ cây mẹ để hình thành một cặp gene.

Bốn bạn An, Bình, Sơn và Dương, mỗi bạn độc lập với nhau, thực hiện phép thử là lai hai cây đậu Hà Lan, trong đó cây bố có kiểu gene là Aa, cây mẹ có kiểu gene là Aa.

Gọi X là số cây con có hạt màu vàng trong số 4 cây con.

a) Lập bảng phân bố xác suất của X.

b) Hỏi trung bình có bao nhiêu cây con có hạt màu xanh?21

1.10. Trong một lớp học có 6 bóng đèn hoạt động độc lập với nhau. Mỗi bóng có xác suất bị hỏng là 0,25. Gọi X là số bóng sáng.

a) Gọi tên phân bố xác suất biến ngẫu nhiên X.

b) Biết rằng lớp học có đủ ánh sáng nếu có ít nhất 4 bóng sáng. Tính xác suất để lớp học đủ ánh sáng.

c) Tính kì vọng, phương sai và độ lệch chuẩn của X.

1.11. Sơn và Tùng thì đấu bóng bàn với nhau. Trận đấu gồm 5 ván độc lập. Xác suất thắng của Sơn trong mỗi ván là $\frac{1}{4}$. Biết rằng mỗi ván không có kết quả hoà. Người thắng trận đấu nếu thắng ít nhất 3 ván đấu.

a) Gọi X là số trận thắng của Sơn. Hỏi X là biến ngẫu nhiên có phân bố xác suất gì?

b) Tính xác suất để Sơn thắng Tùng trong trận đấu.

1.12. Cam xuất khẩu được đóng thành từng thùng. Xác suất để một quả cam không đạt chất lượng là 0,03. Vì số lượng cam trong mỗi thùng rất lớn nên không thể kiểm tra toàn bộ số cam trong thùng, người ta lấy ngẫu nhiên từ thùng cam 20 lần một cách độc lập, mỗi lần lấy 1 quả để kiểm tra rồi trả lại nó vào thùng. Gọi X là số quả cam không đạt chất lượng.

a) Gọi tên phân bố xác suất biến ngẫu nhiên X.

b) Các thùng cam được phân thành ba loại theo cách sau:

Trong 20 lần lấy đó:

- Nếu tất cả các quả cam lấy ra đều đạt chất lượng thì thùng được xếp loại I;

- Nếu có 1 hoặc 2 quả cam không đạt chất lượng thì thùng được xếp loại II;

- Nếu có ít nhất 3 quả cam không đạt chất lượng thì thùng được xếp loại III.

Tính tỉ lệ các thùng cam được xếp loại I, II, III.

## BÀI TẬP CUỐI CHUYÊN ĐỀ 1

1.13. Một chiếc hộp đựng ba tấm thẻ cùng loại ghi số 0, ghi số 1 và ghi số 2. Bạn An rút thẻ ba lần một cách độc lập, mỗi lần rút một tấm thẻ từ trong túi, ghi lại số trên tấm thẻ rồi trả lại thẻ vào hộp. Gọi X là tổng ba số An nhận được sau ba lần rút thẻ. Lập bảng phân bố xác suất của X.

1.14. Có ba chiếc túi I, II và III. Túi I có chứa 5 viên bi trắng và 5 viên bi đen cùng kích thước, khối lượng. Túi II và III mỗi túi có chứa 2 viên bi trắng và 8 viên bi đen. Bạn Mình lấy ngẫu nhiên từ mỗi túi một viên bi. Gọi X là số viên bi trắng lấy được.

a) Lập bảng phân bố xác suất của X.
b) Chứng minh rằng X không phải là biến ngẫu nhiên có phân bố nhị thức.

1.15. Một cuộc thi gồm hai loại câu hỏi: Câu hỏi loại 1 và câu hỏi loại 2. Ở vòng 1 thí sinh bốc ngẫu nhiên câu hỏi loại $i \in \{1; 2\}$. Nếu trả lời sai thì thí sinh dừng cuộc thi tại đây. Nếu trả lời đúng, thí sinh sẽ đi tiếp vào vòng 2, tiếp tục bốc ngẫu nhiên một câu hỏi loại $j \in \{1; 2\} \ (j \neq i)$. Sau khi thí sinh trả lời câu hỏi này, cuộc thi kết thúc. Thí sinh sẽ nhận được $V_i$ điểm nếu trả lời đúng câu hỏi loại $i \in \{1; 2\}$. Giả thiết rằng việc trả lời đúng câu hỏi vòng 1 sẽ không ảnh hưởng đến xác suất trả lời đúng hay sai câu hỏi ở vòng 2. Bạn An tham gia cuộc thi. Gọi $E_i$ là biến cố: “An trả lời đúng câu hỏi loại $i$” ($i \in \{1; 2\}$). Giả sử $P(E_i) = p_i$.

a) Với điều kiện nào thì ở vòng 1, An nên bốc ngẫu nhiên câu hỏi loại 1?
b) Giả sử $p_1 = 0,6$, $p_2 = 0,8$, $V_1 = 20$, $V_2 = 10$. Khi đó ở vòng 1, An nên bốc ngẫu nhiên câu hỏi loại nào?

1.16. Hai kì thủ Hoà và Trường thì một trận đấu cờ. Biết rằng thế lệ ở mỗi ván đấu trong trận này không có kết quả hoà. Xác suất thắng của Trường trong một ván là 0,4. Trận đấu gồm 7 ván. Người nào thắng một số ván lớn hơn là người thắng cuộc. Tính xác suất để Trường là người thắng cuộc.

1.17. Một hệ thống tin cón thành phần hoạt động độc lập với nhau. Xác suất hoạt động của mỗi thành phần là $p$. Hệ hoạt động nếu có ít nhất một nửa các thành phần hoạt động. Với giá trị nào của $p$ thì hệ 5 thành phần tốt hơn hệ 3 thành phần?

1.18. Một cửa hàng cho thuê xe ô tô tự lái. Chi phí cửa hàng phải tiêu tốn cho một chiếc xe là a triệu đồng/ngày. Mỗi chiếc xe được cho thuê thì cửa hàng thu về được 1 triệu đồng/ngày. Biết rằng nhu cầu cho thuê trong một ngày là một biến ngẫu nhiên rời rạc X có bảng phân bố xác suất như sau:

|  X | 0 | 1 | 2 | 3 | 4  |
| --- | --- | --- | --- | --- | --- |
|  P | 0,0608 | 0,1703 | 0,2384 | 0,2225 | 0,308  |

a) Giả sử cửa hàng có 3 chiếc ô tô cho thuê. Gọi Y là số tiền cửa hàng thu được trong 1 ngày. Lập bảng phân bố xác suất của Y. Hỏi trung bình một ngày cửa hàng thu được bao nhiêu tiền từ việc cho thuê xe?
b) Giả sử cửa hàng có 4 chiếc ô tô cho thuê. Gọi Z là số tiền cửa hàng thu được trong 1 ngày. Lập bảng phân bố xác suất của Z. Hỏi trung bình một ngày cửa hàng thu được bao nhiêu tiền từ việc cho thuê xe?
c) Với giá trị nào của $a$ thì cửa hàng chỉ nên duy trì 3 xe ô tô cho thuê?

# CHUYÊN ĐỀ 2 ỨNG DỤNG TOÁN HỌC ĐỂ GIẢI QUYẾT MỘT SỐ BÀI TOÁN TỐI ƯU

Trong cuộc sống, chúng ta thường phải giải quyết các bài toán tối ưu, chẳng hạn bài toán tìm phương án sản xuất hoặc vận chuyển sao cho chi phí cần thiết là nhỏ nhất hoặc lợi nhuận thu được là lớn nhất. Chuyên đề này giới thiệu phương pháp hình học để giải những bài toán quy hoạch tuyến tính hai biến và phương pháp đạo hàm để giải một số bài toán tối ưu đơn giản thường gặp có thể đưa về việc tìm giá trị lớn nhất hoặc nhỏ nhất của hàm số một biến số.

## Bài 3 VẬN DỤNG HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN ĐỂ GIẢI QUYẾT MỘT SỐ BÀI TOÁN QUY HOẠCH TUYẾN TÍNH

**THUẬT NGỮ**

- Bài toán quy hoạch tuyến tính
- Hàm mục tiêu, các ràng buộc
- Phương án chấp nhận được, điểm cực biên, phương án cực biên và phương án tối ưu

**KIẾN THỨC, KĨ NĂNG**

- Vận dụng các kiến thức về hệ bất phương trình bậc nhất hai ẩn để giải quyết một số bài toán quy hoạch tuyến tính.

Một xí nghiệp sản xuất hai loại sản phẩm I và II. Mỗi kilôgam sản phẩm loại I cần 2 kg nguyên liệu và 30 giờ làm, đem lại mức lợi nhuận 40 nghìn đồng. Mỗi kilôgam sản phẩm loại II cần 4 kg nguyên liệu và 15 giờ làm, đem lại mức lợi nhuận là 30 nghìn đồng. Xí nghiệp có 200 kg nguyên liệu và tối đa 1 200 giờ làm việc. Hãy đặt kế hoạch sản xuất để xí nghiệp có mức lợi nhuận cao nhất.24

### 1. GIỚI THIỆU BÀI TOÁN QUY HOẠCH TUYỀN TÍNH HAI BIẾN

**HĐ1.** Trong bài toán mở đầu, gọi $x$ và $y$ lần lượt là số kilôgam sản phẩm loại I và loại II cần sản xuất.

a) Kí hiệu $F(x; y)$ là lợi nhuận của xí nghiệp khi sản xuất $x$ kg sản phẩm loại I và $y$ kg sản phẩm loại II. Viết biểu thức tính $F(x; y)$ theo $x$ và $y$.

b) Lập hệ bất phương trình bậc nhất hai ấn ràng buộc $x$ và $y$ thoả mãn yêu cầu của bài toán.

c) Biểu diễn trên mặt phẳng toạ độ để thấy rằng miền nghiệm của hệ bất phương trình tìm được trong ý b là một miền từ giác. Tìm toạ độ các đỉnh của miền từ giác này.

d) Tính giá trị của $F(x; y)$ tại các đỉnh của miền từ giác tìm được trong ý b, từ đó dự đoán về mức lợi nhuận cao nhất.

Trong thực tiễn, ta thường gặp bài toán sau:

Tìm giá trị lớn nhất (tương ứng, giá trị nhỏ nhất) của biểu thức $F(x; y) = Ax + By$ trên miền nghiệm $S$ của một hệ bất phương trình bậc nhất hai ấn:

$$
S: \left\{ \begin{array}{l} a_1 x + b_1 y \leq c_1 \\ a_2 x + b_2 y \leq c_2 \\ \dots \\ a_n x + b_n y \leq c_n \end{array} \right. \tag{1}
$$

ở đó $A, B$ là hai số thực cho trước, không đồng thời bằng 0.

Các bài toán như vậy gọi là bài toán quy hoạch tuyến tính hai biến. Biểu thức $F(x; y)$ ở trên gọi là hàm mục tiêu.

**Chú ý**

a) Mỗi bất phương trình trong hệ (1) gọi là một ràng buộc. Nếu $(x_0; y_0)$ là một nghiệm của hệ (1) thì ta nói $(x_0; y_0)$ là một phương án chấp nhận được hoặc phương án khả thi của bài toán. Tập các phương án chấp nhận được còn gọi là miền chấp nhận được. Nếu $F(x; y)$ đạt giá trị lớn nhất (tương ứng, giá trị nhỏ nhất) trên miền nghiệm $S$ tại $(x_0; y_0)$ thì cập $(x_0; y_0)$ gọi là một phương án tối ưu của bài toán và giá trị $F(x_0; y_0)$ gọi là giá trị tối ưu.

b) Bài toán quy hoạch tuyến tính trên được kí hiệu như sau:

$$
F(x; y) = Ax + By \rightarrow \max(\min)
$$

với các ràng buộc

$$
\left\{ \begin{array}{l} a_1 x + b_1 y \leq c_1 \\ a_2 x + b_2 y \leq c_2 \\ \dots \\ a_n x + b_n y \leq c_n. \end{array} \right.
$$

c) Trong hệ (1), một số ràng buộc có thể được viết dưới dạng $ax + by \geq c$.

**Ví dụ 1.** Một công ty sản xuất hai loại thực phẩm X, Y. Nguyên liệu để sản xuất gồm ba loại là bột, đường và dầu thực vật, với lượng dự trữ tương ứng là 15 tấn, 12 tấn, 10 tấn. Để sản xuất:

- 1 tấn thực phẩm loại X cần 0,5 tấn bột, 0,5 tấn đường, 0,2 tấn dầu thực vật;
- 1 tấn thực phẩm loại Y cần 0,6 tấn bột, 0,3 tấn đường, 0,5 tấn dầu thực vật.Giá bán một tấn thực phẩm X là 100 triệu đồng, giá bán một tấn thực phẩm Y là 112 triệu đồng. Hỏi cần sản xuất mỗi loại thực phẩm bao nhiêu tấn để có doanh thu lớn nhất?

Gọi $x$ và $y$ lần lượt là số tấn thực phẩm X và Y cần sản xuất.

a) Viết biểu thức $F(x; y)$ biểu thị số tiền bán thực phẩm thu được theo $x$ và $y$.

b) Lập hệ bất phương trình bậc nhất hai ẩn $x$ và $y$ biểu thị các ràng buộc của bài toán.

c) Biểu diễn miền nghiệm của hệ bất phương trình tìm được trong ý b. Tìm toạ độ các đỉnh của miền nghiệm và tính giá trị của $F(x; y)$ tại các điểm đó.

**Giải**

a) $F(x; y) = 100x + 112y$ triệu đồng.

b) Số tấn bột để sản xuất $x$ tấn thực phẩm X và $y$ tấn thực phẩm Y là $0,5x + 0,6y$.

Số tấn đường để sản xuất $x$ tấn thực phẩm X và $y$ tấn thực phẩm Y là $0,5x + 0,3y$.

Số tấn dầu thực vật để sản xuất $x$ tấn thực phẩm X và $y$ tấn thực phẩm Y là $0,2x + 0,5y$.

Vì lượng nguyên liệu sử dụng không vượt quá lượng dự trữ nên ta có hệ:

$$
\left\{
\begin{array}{l}
0,5x + 0,6y \leq 15 \\
0,5x + 0,3y \leq 12 \\
0,2x + 0,5y \leq 10 \\
x \geq 0, y \geq 0.
\end{array}
\right.
$$

c) Tập các phương án chấp nhận được là miền ngũ giác tô màu trong Hình 2.1.

Các đỉnh của miền nghiệm là:

$$
O(0; 0), A(0; 20), B\left(\frac{150}{13}, \frac{200}{13}\right), C(18; 10), D(24; 0).
$$

Ta có:

$$
F(0; 0) = 100 \cdot 0 + 112 \cdot 0 = 0;
$$

$$
F(0; 20) = 100 \cdot 0 + 112 \cdot 20 = 2240;
$$

$$
F\left(\frac{150}{13}, \frac{200}{13}\right) = 100 \cdot \frac{150}{13} + 112 \cdot \frac{200}{13} = \frac{37400}{13},
$$

$$
F(18; 10) = 100 \cdot 18 + 112 \cdot 10 = 2920;
$$

$$
F(24; 0) = 100 \cdot 24 + 112 \cdot 0 = 2400.
$$


**Ví dụ 2.** Xét bài toán:

$$
F(x; y) = 3x + 2y \rightarrow \min
$$

với các ràng buộc

$$
\left\{
\begin{array}{l}
x - y \leq 1 \\
x + y \geq 3 \\
x \geq 0.
\end{array}
\right.
$$

a) Biểu diễn tập nghiệm của hệ các ràng buộc trên mặt phẳng toạ độ.

b) Gọi $A$, $B$ là giao điểm của đường thẳng $d$: $x + y = 3$ với đường thẳng $d'$: $x - y = 1$ và trục $Oy$. Tính giá trị $F(x; y)$ tại các điểm $A$ và $B$.

**Giải**

a) Tập nghiệm của hệ các ràng buộc là miền không bị chặn được tô màu như trong Hình 2.2.

b) Toạ độ giao điểm A của hai đường thẳng d và d' là A(2; 1). Toạ độ giao điểm B của đường thẳng d và trục Oy là B(0; 3).

Ta có: $F(2; 1) = 3 \cdot 2 + 2 \cdot 1 = 8$; $F(0; 3) = 3 \cdot 0 + 2 \cdot 3 = 6$.

![img-9.jpeg](img-9.jpeg)
Hình 2.2

**Chú ý**

- Trong Ví dụ 2, các điểm A, B cũng được gọi là “đỉnh” của miền nghiệm S.
- Nếu phương án chấp nhận được $(x_0; y_0)$ là một đỉnh của miền nghiệm thì $(x_0; y_0)$ được gọi là một điểm cực biên hoặc phương án cực biên.

**Luyện tập 1.** Người ta dự định dùng hai loại nguyên liệu để chiết xuất ít nhất 140 kg chất X và 9 kg chất Y. Từ mỗi tấn nguyên liệu loại I giá 4 triệu đồng có thể chiết xuất được 20 kg chất X và 0,6 kg chất Y. Từ mỗi tấn nguyên liệu loại II giá 3 triệu đồng, có thể chiết xuất được 10 kg chất X và 1,5 kg chất Y. Cơ sở cung cấp nguyên liệu chỉ có thể cung cấp không quá 10 tấn nguyên liệu loại I và không quá 9 tấn nguyên liệu loại II.

Phải dùng bao nhiêu tấn nguyên liệu mỗi loại để chi phí mua nguyên liệu là ít nhất mà vẫn đáp ứng được các yêu cầu đặt ra ở trên?

a) Đặt ẩn và viết bài toán quy hoạch tuyến tính diễn tả yêu cầu của bài toán trên.

b) Biểu diễn tập các phương án chấp nhận được và tìm các phương án cực biên.

### 2. BÀI TOÁN QUY HOẠCH TUYẾN TÍNH VỚI MIỀN CHẤP NHẬN ĐƯỢC LÀ MIỀN ĐA GIÁC

**HĐ2.** Ta giải bài toán trong Tình huống mở đầu.

Từ HĐ1 ta có bài toán quy hoạch tuyến tính sau:

$$
F(x; y) = 40x + 30y \rightarrow \max
$$

với các ràng buộc

$$
\left\{ \begin{array}{l} x + 2y \leq 100 \\ 2x + y \leq 80 \\ x \geq 0, y \geq 0. \end{array} \right.
$$

Miền chấp nhận được S của bài toán là miền từ giác tô màu trong Hình 2.3.

a) Tìm tập hợp các điểm $M(x; y)$ thoả mãn

$$
F(x; y) = 40x + 30y = 1200.
$$

b) Với mỗi số thực $m$ xét đường thẳng $d_m : 40x + 30y = m$.

Từ hình vẽ, tìm điều kiện của $m$ để $d_m \cap S \neq \emptyset$.

c) Từ phần b suy ra giá trị lớn nhất của $F(x; y)$ trên miền $S$, từ đó suy ra lời giải của bài toán.

**Nhận xét**

Xét bài toán quy hoạch tuyến tính với tập các phương án chấp nhận được S. Người ta chứng minh được rằng:

- Nếu $S = \emptyset$ thì bài toán không có phương án tối ưu.
- Nếu $S \neq \emptyset$ và là miền đa giác thì bài toán luôn có phương án tối ưu và phương án tối ưu là một trong các phương án cực biên.

Các bước giải bài toán quy hoạch tuyến tính với miền chấp nhận được là miền đa giác:

**Bước 1.** Đặt biến.

**Bước 2.** Xác định hàm mục tiêu.

**Bước 3.** Xác định hệ bất phương trình bậc nhất gồm tất cả các ràng buộc của bài toán.

**Bước 4.** Biểu diễn tập các phương án chấp nhận được. Tìm các phương án cực biên.

**Bước 5.** Tính giá trị của hàm mục tiêu tại các điểm cực biên, từ đó suy ra giá trị lớn nhất và giá trị nhỏ nhất của hàm mục tiêu rồi kết luận.

**Ví dụ 3.** (Bài toán vitamin) Một nhà khoa học đã nghiên cứu về tác động phối hợp của hai loại vitamin A và B đối với cơ thể con người. Kết quả như sau:

i) Một người mỗi ngày cần từ 400 đến 1 000 đơn vị vitamin cả A lẫn B;

ii) Trong một ngày mỗi người có thể tiếp nhận không quá 600 đơn vị vitamin A và không quá 500 đơn vị vitamin B;

iii) Do tác động phối hợp của hai loại vitamin trên, nên mỗi ngày, một người sử dụng số đơn vị vitamin B không ít hơn một nửa số đơn vị vitamin A nhưng không nhiều hơn ba lần số đơn vị vitamin A.

Biết rằng mỗi đơn vị vitamin A có giá 90 đồng và mỗi đơn vị vitamin B có giá 75 đồng. Tìm phương án dùng hai loại vitamin A và B thoả mãn các điều kiện ở trên sao cho chi phí rẻ nhất.

**Giải**

**Bước 1.** Gọi $x$ và $y$ lần lượt là số đơn vị vitamin A và B mà một người dùng mỗi ngày.

**Bước 2.** Chi phí mua vitamin là $F(x; y) = 90x + 75y$ đồng.

**Bước 3.** Hệ bất phương trình ràng buộc $x$ và $y$ là

$$
\left\{
\begin{array}{l}
0 \leq x \leq 600 \\
0 \leq y \leq 500 \\
400 \leq x + y \leq 1000 \\
\frac{1}{2}x \leq y \leq 3x.
\end{array}
\right.
$$

**Bước 4.** Miền nghiệm của hệ bất phương trình này là miền lục giác MNPQRS trong Hình 2.4.

Các điểm cực biên là:

$$
M(100; 300), N\left(\frac{500}{3}; 500\right), P(500; 500),
$$

$$
Q(600; 400), R(600; 300), S\left(\frac{800}{3}; \frac{400}{3}\right).
$$

**Bước 5.** Bài toán yêu cầu tìm giá trị nhỏ nhất của $F(x; y)$ trên miền lục giác MNPQRS. Ta biết rằng $F(x; y)$ đạt giá trị nhỏ nhất tại một trong các đỉnh của lục giác. Tính giá trị của $F(x; y)$ tại các đỉnh của lục giác ta được:

$$
F(100; 300) = 31\,500; F\left(\frac{500}{3}; 500\right) = 52\,500; F(500; 500) = 82\,500;
$$

$$
F(600; 400) = 84\,000; F(600; 300) = 76\,500; F\left(\frac{800}{3}; \frac{400}{3}\right) = 34\,000.
$$

Giá trị nhỏ nhất của $F(x; y)$ bằng 31 500 tại $M(100; 300)$. Phương án tối ưu là (100; 300). Vậy chi phí mua vitamin nhỏ nhất là 31 500 đồng khi $x = 100$ và $y = 300$.

Bây giờ ta sẽ xét một tình huống mà phương án tối ưu của bài toán đạt được tại vô số điểm trên miền chấp nhận được.

**Ví dụ 4.** Một công ty sơn sản xuất hai loại sơn là sơn nội thất và sơn ngoài trời. Nguyên liệu để sản xuất gồm hai loại X và Y với trữ lượng lần lượt là 6 tấn và 8 tấn. Để sản xuất một tấn sơn nội thất cần 2 tấn nguyên liệu X và 1 tấn nguyên liệu Y. Để sản xuất một tấn sơn ngoài trời cần 1 tấn nguyên liệu X và 2 tấn nguyên liệu Y. Qua nghiên cứu thị trường, công ty thấy rằng nhu cầu sơn nội thất không nhiều hơn sơn ngoài trời quá 1 tấn và nhu cầu cực đại của sơn nội thất là 2 tấn. Giá bán một tấn sơn nội thất là 60 triệu đồng, một tấn sơn ngoài trời là 30 triệu đồng. Công ty cần sản xuất mỗi loại sơn bao nhiêu tấn để doanh thu lớn nhất?

**Giải**

**Bước 1.** Gọi $x$ và $y$ lần lượt là số tấn sơn nội thất và sơn ngoài trời công ty cần sản xuất.

**Bước 2.** Doanh thu của công ty là:

$$
F(x; y) = 60x + 30y \text{ (triệu đồng)}.
$$

**Bước 3.** Hệ bất phương trình bậc nhất ràng buộc $x$ và $y$ là

$$
\left\{
\begin{array}{l}
0 \leq x \leq 2 \\
y \geq 0 \\
2x + y \leq 6 \\
x + 2y \leq 8 \\
x \leq y + 1.
\end{array}
\right.
$$

**Bước 4.** Miền nghiệm của hệ bất phương trình này là miền lục giác OABCDE trong Hình 2.5.

Các điểm cực biên là: $O(0; 0)$, $A(1; 0)$, $B(2; 1)$, $C(2; 2)$, $D\left(\frac{4}{3}; \frac{10}{3}\right)$, $E(0; 4)$.

**Bước 5.** Bài toán yêu cầu tìm giá trị lớn nhất của $F(x; y)$ trên miền lục giác OABCDE.

Ta biết rằng, $F(x; y)$ đạt giá trị lớn nhất tại một trong các đỉnh của lục giác. Tính giá trị của $F(x; y)$ tại các đỉnh của đa giác ta được:

$$
F(0; 0) = 0; F(1; 0) = 60; F(2; 1) = 150; F(2; 2) = F\left(\frac{4}{3}; \frac{10}{3}\right) = 180; F(0; 4) = 120.
$$

Chú ý rằng vì đường thẳng $CD$ có phương trình $2x + y = 6$, nên với mọi điểm $M(x; y)$ thuộc đường thẳng $CD$ ta đều có $F(x; y) = 60x + 30y = 30(2x + y) = 30 \cdot 6 = 180$. Vậy biểu thức $F(x; y)$ đạt giá trị lớn nhất bằng 180 tại mọi điểm $M(x; y)$ thuộc đoạn thẳng $CD$. Như vậy bài toán có vô số phương án tối ưu, đó là toạ độ của tất cả các điểm thuộc đoạn thẳng $CD$. Từ đó suy ra, công ty cần sản xuất $x$ tần sơn nội thất và $y = 6 - 2x$ tần sơn ngoài trời với $\frac{4}{3} \leq x \leq 2$ thì doanh thu lớn nhất.

**Luyện tập 2.** Một công ty cần thuê xe để chở 140 người và 9 tấn hàng. Nơi thuê xe có hai loại xe A và B, trong đó loại xe A có 10 chiếc và loại xe B có 9 chiếc. Một chiếc xe loại A cho thuê với giá 4 triệu đồng, một chiếc xe loại B cho thuê với giá 3 triệu đồng. Biết rằng mỗi xe loại A có thể chở tối đa 20 người và 0,6 tấn hàng; mỗi xe loại B có thể chở tối đa 10 người và 1,5 tấn hàng. Phải thuê bao nhiêu xe loại A và bao nhiêu xe loại B để chi phí bỏ ra là ít nhất mà vẫn chở được hết hàng và người?

### 3. BÀI TOÁN QUY HOẠCH TUYỀN TÍNH VỚI MIỀN CHẤP NHẬN ĐƯỢC KHÔNG LÀ MIỀN ĐA GIÁC

**HĐ3.** Xét bài toán quy hoạch tuyến tính

$$
F(x; y) = 3x + 4y \rightarrow \min
$$

với các ràng buộc

$$
\left\{ \begin{array}{l}
x \geq 0, y \geq 0 \\
x + 2y \geq 4 \\
x + y \geq 3.
\end{array} \right.
$$

a) Kiểm tra lại rằng miền $S$ tô màu trong Hình 2.6 là miền chấp nhận được của bài toán.

b) Tìm tập hợp các điểm $M(x; y)$ thoả mãn

$$
F(x; y) = 3x + 4y = 12.
$$

c) Với mỗi số thực $m$, xét đường thẳng

$$
d_m: 3x + 4y = m.
$$

Từ hình vẽ, tìm điều kiện của $m$ để $d_m \cap S \neq \emptyset$.

d) Từ phần c suy ra giá trị nhỏ nhất của $F(x; y)$ trên miền chấp nhận được. Chứng tỏ rằng, giá trị nhỏ nhất này chính là giá trị của $F(x; y)$ tại một điểm cực biên của miền chấp nhận được.30

**Nhận xét**

Xét bài toán quy hoạch tuyến tính với tập các phương án chấp nhận được S. Người ta chứng minh được rằng:

- Nếu bài toán có phương án tối ưu thì phương án tối ưu là một trong các phương án cực biên.
- Nếu hàm mục tiêu $F(x; y) = Ax + By$ có $A > 0$, $B > 0$ và các ràng buộc bao gồm $x \geq 0$, $y \geq 0$ và miền chấp nhận được không là miền đa giác thì $F(x; y)$ có giá trị nhỏ nhất mà không có giá trị lớn nhất.

**Ví dụ 5.** (Bài toán khẩu phần ăn) Một chuyên gia dinh dưỡng dự định làm một thực đơn gồm hai loại thực phẩm chính X và Y. Biết rằng:

- Cứ 100 gam thực phẩm X chứa 2 đơn vị chất béo, 1 đơn vị carbohydrate và 4 đơn vị protein.
- Cứ 100 gam thực phẩm Y chứa 3 đơn vị chất béo, 3 đơn vị carbohydrate và 3 đơn vị protein.

Vị chuyên gia này muốn thức ăn phải cung cấp ít nhất 18 đơn vị chất béo, 12 đơn vị carbohydrate và 24 đơn vị protein. Chuyên gia này phải làm thực đơn thế nào để chi phí mua nguyên liệu là rẻ nhất và vẫn đảm bảo các yêu cầu ở trên? Biết rằng 100 gam thực phẩm X có giá 20 nghìn đồng và 100 gam thực phẩm Y có giá 25 nghìn đồng.

**Giải**

**Bước 1.** Gọi $x$ và $y$ lần lượt là số trăm gam thực phẩm X và Y trong thực đơn.

**Bước 2.** Chi phí mua thực phẩm là $F(x; y) = 20x + 25y$ (nghìn đồng).

**Bước 3.** Hệ bất phương trình ràng buộc $x$ và $y$ là

$$
\left\{
\begin{array}{l}
x \geq 0, y \geq 0 \\
2x + 3y \geq 18 \\
x + 3y \geq 12 \\
4x + 3y \geq 24.
\end{array}
\right.
$$

**Bước 4.** Miền nghiệm của hệ bất phương trình này là miền tô màu, không là miền đa giác, trong Hình 2.7.

Ở đây $d_1: 2x + 3y = 18; d_2: x + 3y = 12; d_3: 4x + 3y = 24$.

Các điểm cực biên là $A(0; 8), B(3; 4), C(6; 2), D(12; 0)$.

**Bước 5.** Bài toán yêu cầu tìm giá trị nhỏ nhất của $F(x; y)$ trên miền nghiệm của hệ bất phương trình trên. Theo Nhận xét ở trên, $F(x; y)$ có giá trị nhỏ nhất trên $S$ và đạt được tại một trong các điểm cực biên của miền chấp nhận được. Tính giá trị của $F(x; y)$ tại các điểm cực biên ta được:

$$
F(0; 8) = 200; F(3; 4) = 160; F(6; 2) = 170; F(12; 0) = 240.
$$

Vậy giá trị nhỏ nhất của $F(x; y)$ trên miền $S$ là 160 đạt được tại $B(3; 4)$. Suy ra phương án tối ưu là $B(3; 4)$ và giá trị tối ưu là 160.

Vậy chuyên gia thực phẩm cần mua 300 gam thực phẩm X và 400 gam thực phẩm Y thì chi phí mua thực phẩm sẽ ít nhất mà vẫn đảm bảo yêu cầu về dinh dưỡng.

**Ví dụ 6.** Xét hệ bất phương trình bậc nhất hai ẩn:

$$
\left\{ \begin{array}{l} x + y \geq 3 \\ 2x - y \geq 1 \\ x - 2y \geq -4 \\ y \geq 0. \end{array} \right.
$$

a) Biểu diễn miền nghiệm của hệ bất phương trình đã cho trên mặt phẳng toạ độ và tím toạ độ các điểm cực biên.

b) Tìm giá trị lớn nhất và giá trị nhỏ nhất (nếu có) của biểu thức $F(x; y) = 2x + 3y$ với $(x; y)$ thoả mãn hệ bất phương trình trên.

c) Tìm giá trị lớn nhất và giá trị nhỏ nhất (nếu có) của biểu thức $G(x; y) = -x + 0.5y$ trên miền nghiệm của hệ bất phương trình trên.

**Giải**

a) Miền nghiệm của $S$ hệ bất phương trình không là miền đa giác và được tô màu trong Hình 2.8. Ở đây $d_1, d_2$ và $d_3$ là các đường thẳng có phương trình lần lượt là $x + y = 3$, $2x - y = 1$ và $x - 2y = -4$.

Có ba điểm cực biên là: $A(2; 3)$, $B\left(\frac{4}{3}; \frac{5}{3}\right)$ và $C(3; 0)$.

b) Vì miền chấp nhận được không là miền đa giác và có $x \geq 0$, $y \geq 0$, nên theo Nhận xét ở trên thì $F(x; y)$ có giá trị nhỏ nhất mà không có giá trị lớn nhất.

Tính giá trị của $F(x; y)$ tại các điểm cực biên ta được:

$$
F(2; 3) = 2 \cdot 2 + 3 \cdot 3 = 13;
$$

$$
F\left(\frac{4}{3}; \frac{5}{3}\right) = 2 \cdot \frac{4}{3} + 3 \cdot \frac{5}{3} = \frac{23}{3};
$$

$$
F(3; 0) = 2 \cdot 3 + 3 \cdot 0 = 6.
$$

Vậy giá trị nhỏ nhất của $F(x; y)$ bằng 6 tại điểm cực biên $C(3; 0)$.

Thực tế, ta thấy biểu thức $F(x; y)$ có thể lớn tuỳ ý khi $x, y$ đủ lớn, vì vậy $F(x; y)$ không có giá trị lớn nhất trên miền $S$.

c) Với mỗi số thực $m$, xét đường thẳng $L_m: -x + \frac{1}{2}y = m$.

Đường thẳng $L_m$ song song với $AB$ và cắt $Oy$ tại điểm $(0; 2m)$ (H.2.9). Dễ thấy $L_m \cap S \neq \emptyset$ nếu và chỉ nếu $2m \leq -1$ hay $m \leq \frac{-1}{2}$. Từ đó suy ra, giá trị lớn nhất của $G(x; y)$ bằng $\frac{-1}{2}$ đạt được tại mọi điểm của đoạn $AB$. Thực tế, với mọi điểm $M(x; y)$ thuộc đoạn $AB$ ta đều có

$$
G(x; y) = -x + \frac{1}{2}y = -\frac{1}{2}(2x - y) = -\frac{1}{2} \cdot 1 = -\frac{1}{2}.
$$

![img-16.jpeg](img-16.jpeg)Cũng từ kết quả: $L_{m} \cap S \neq \emptyset$ nếu và chỉ nếu $m \leq -\frac{1}{2}$ suy ra $G(x; y)$ không có giá trị nhỏ nhất trên miền $S$. Thực tế, $G(x; y)$ có thể nhỏ tuỳ ý khi $x$ đủ lớn còn $y = 0$.

**Luyện tập 3.** Giải bài toán quy hoạch tuyến tính sau:

$$
F(x; y) = x + 2y \rightarrow \min
$$

với các ràng buộc

$$
\left\{ \begin{array}{l}
x \geq 0, y \geq 0 \\
x + y \geq 1 \\
2x + 4y \geq 3.
\end{array} \right.
$$

**Vận dụng.** Một chủ trang trại cần sử dụng phân bón để chăm sóc cho một loại đậu tương. Loại đậu tương này cần ít nhất 18 đơn vị đạm và ít nhất 6 đơn vị phosphate. Ông chủ trang trại có thể sử dụng hai loại phân bón X và Y. Giá cả, hàm lượng đạm và hàm lượng phosphate có trong một tạ phân X và một tạ phân Y được cho bởi bảng sau:

|  Phân bón | Số đơn vị đạm | Số đơn vị phosphate | Giá (triệu đồng)  |
| --- | --- | --- | --- |
|  X | 3 | 2 | 1,7  |
|  Y | 6 | 1 | 1,2  |

Hãy cho biết cần phải mua bao nhiêu tạ phân loại X, bao nhiêu tạ phân loại Y để chi phí là thấp nhất mà vẫn đảm bảo chế độ dinh dưỡng cho loại đậu tương trên?

### BÀI TẬP

2.1. Một trung tâm tổ chức sự kiện có một phòng tổ chức lễ cưới với hai kiểu bàn ăn: bàn hình chữ nhật ngồi 6 người với giá thuê 200 nghìn đồng và bàn tròn ngồi 10 người với giá thuê 300 nghìn đồng. Anh Nam muốn thuê phòng để tổ chức đám cưới với 250 khách mời. Căn phòng chỉ chứa được tối đa 35 bàn các loại và chỉ có 15 bàn hình chữ nhật. Hỏi anh Nam phải thuê mỗi loại bàn bao nhiêu để giảm thiểu tối đa chi phí mà vẫn đáp ứng được các yêu cầu trên?

2.2. Một cơ sở sản xuất hai loại sữa chua X và Y. Nguyên liệu chính để sản xuất hai loại sữa chua này là dâu tây, sữa và đường. Để sản xuất một đơn vị sữa chua X và một đơn vị sữa chua Y cần lượng nguyên liệu như trong bảng:

|  Nguyên liệu | Sữa chua X | Sữa chua Y  |
| --- | --- | --- |
|  Dâu tây | 2 kg | 3 kg  |
|  Sữa | 2 kg | 1 kg  |
|  Đường | 0 kg | 1 kg  |

Nguồn nguyên liệu dự trữ dâu tây, sữa và đường lần lượt là 1,2 tấn; 0,8 tấn và 0,3 tấn. Giá bán mỗi đơn vị sữa chua X và Y lần lượt là 800 nghìn đồng và 1,2 triệu đồng. Cơ sở sản xuất cần sản xuất bao nhiêu đơn vị sữa chua X và Y để lợi nhuận thu được là lớn nhất?

2.3. Một nhà máy hoá chất sản xuất hai hợp chất X và Y. Khi sản xuất một đơn vị hợp chất X sẽ có 2 dm³ khí CO (carbon monoxide) và 6 dm³ khí SO₂ (sulfur dioxide) phát tán ra môi trường. Khi sản xuất một đơn vị hợp chất Y sẽ có 4 dm³ khí CO và 3 dm³ khí SO₂ phát tán ra môi trường. Các yêu cầu về khí thải chỉ cho phép nhà máy phát thải ra môi trường mỗi tuần không quá 3 000 dm³ khí CO và không quá 5 400 dm³ khí SO₂. Nhà máy có thể bán hết tất cả các đơn vị hợp chất X và Y sản xuất ra với giá 36 000 đồng một đơn vị hợp chất X và 24 000 đồng một đơn vị hợp chất Y. Xác định số đơn vị hợp chất X và Y mỗi loại cần sản xuất trong một tuần để thu được lợi nhuận cao nhất mà vẫn đảm bảo các yêu cầu về khí thải môi trường.

2.4. Chế độ ăn của một người yêu cầu mỗi ngày tối thiểu 400 đơn vị vitamin, 500 đơn vị khoáng chất và 1 400 đơn vị calo. Có hai loại thức ăn F₁ và F₂; mỗi đơn vị F₁ giá 1 200 đồng và mỗi đơn vị F₂ giá 720 đồng. Mỗi đơn vị thức ăn F₁ chứa 2 đơn vị vitamin, 1 đơn vị khoáng chất và 4 đơn vị calo. Mỗi đơn vị thức ăn F₂ chứa 1 đơn vị vitamin, 2 đơn vị khoáng chất và 4 đơn vị calo. Tìm chế ăn hỗn hợp F₁ và F₂ sao cho chi phí là ít nhất mà vẫn đảm bảo các yêu cầu về dinh dưỡng.

2.5. Một hãng bán gà rán nghiên cứu thấy rằng để làm ra món gà rán có chất lượng tốt nhất thì thức ăn cho gà cần được bổ sung thêm 4 loại vitamin V1, V2, V3 và V4. Tổng lượng vitamin tối thiểu phải bổ sung cho mỗi 100g thức ăn cho gà là: V1 cần 50 đơn vị, V2 cần 100 đơn vị, V3 cần 60 đơn vị và V4 cần 180 đơn vị. Có hai loại thức ăn S1 và S2 cung cấp 4 loại vitamin này. Loại S1 có giá 720 đồng một gam và mỗi gam S1 có chứa 5 đơn vị V1, 25 đơn vị V2, 10 đơn vị V3 và 35 đơn vị V4. Loại S2 có giá 960 đồng một gam và mỗi gam S2 có chứa 25 đơn vị V1, 10 đơn vị V2, 10 đơn vị V3 và 20 đơn vị V4. Hỏi cần phải thêm vào 100 gam thức ăn cho gà mỗi loại S1 và S2 bao nhiêu gam để chi phí là thấp nhất mà vẫn đảm bảo dinh dưỡng cho gà?

## Bài 4 VẬN DỤNG ĐẠO HÀM ĐỂ GIẢI QUYẾT MỘT SỐ BÀI TOÁN TỐI ƯU

**THUẬT NGỮ**

- Bài toán tối ưu
- Bài toán kinh tế
- Hàm cầu, chi phí, doanh thu, lợi nhuận

**KIẾN THỨC, KĨ NĂNG**

- Vận dụng các kiến thức về đạo hàm để giải quyết một số bài toán tối ưu xuất hiện trong thực tiễn.
- Vận dụng các kiến thức về đạo hàm để giải quyết một số bài toán tối ưu trong kinh tế.


Vào năm 1658, nhà toán học người Pháp Pierre de Fermat đã đưa ra một nguyên lí cơ bản của quang hình học mà hiện nay gọi là nguyên lí Fermat (theo *britannica.com*). Từ nguyên lí này có thể rút ra được các định luật cơ bản khác của quang hình học như định luật phản xạ, định luật khúc xạ ánh sáng,...

Nguyên lí Fermat và ứng dụng của nó trong Vật lí là một ví dụ điển hình mô tả rõ tầm quan trọng của bài toán tối ưu trong khoa học, kĩ thuật. Trong thực tiễn cuộc sống, cũng có rất nhiều tình huống xuất hiện các bài toán tối ưu. Ví dụ như: một doanh nhân muốn giảm thiểu chi phí và tối đa hoá lợi nhuận kinh doanh; một du khách muốn giảm thiểu thời gian di chuyển,... Trong bài này, chúng ta sẽ vận dụng các kiến thức về đạo hàm của hàm số để giải một số bài toán tối ưu trong thực tiễn, đặc biệt là các bài toán tối ưu trong kinh tế.

### 1. VẬN DỤNG ĐẠO HÀM ĐỂ GIẢI QUYẾT MỘT SỐ BÀI TOÁN TỐI ƯU TRONG THỰC TIỄN

Khi tiến hành kế hoạch sản xuất, điều khiển các hệ thống, thiết kế kĩ thuật,... nếu biết dựa trên các nguyên tắc cực trị sẽ tiết kiệm được vật tư, tiền vốn, tài nguyên, sức lao động, thời gian và tăng được hiệu quả giải quyết các vấn đề đặt ra.

Cơ sở lí thuyết và các phương pháp thực hành để giải quyết những vấn đề nêu trên nằm trong lí thuyết các bài toán tối ưu. Một trong những phương pháp đơn giản thường dùng để giải các bài toán tối ưu là vận dụng kiến thức về đạo hàm để tìm cực trị của các hàm mục tiêu.

**HĐ1.** Một người đánh cá đang ở trên thuyền (vị trí A) cách bờ biển (điểm P) 2 km về phía đông trên đường bờ biển thẳng theo phương bắc nam. Nhà anh ấy nằm bên bờ biển, cách vị trí điểm P khoảng 6 km về phía bắc. Anh ấy có thể chèo thuyền với vận tốc 3 km/h và đi bộ với vận tốc 5 km/h (giả sử vận tốc của dòng nước là không đáng kể so với vận tốc mà người đánh cá chèo thuyền). Anh ấy dự kiến sẽ chèo thuyền thẳng đến một điểm Q đâu đó trên bờ biển về phía bắc điểm P, với $0 \leq PQ \leq 6$ (km), rồi đi bộ quãng đường còn lại để về nhà.

a) Hãy chọn các kí hiệu cho các đại lượng đã biết và đại lượng chưa biết trong bài toán trên.
b) Tìm các mối quan hệ giữa các kí hiệu trong câu a).
c) Nếu anh ấy chèo thuyền đến P rồi đi bộ về nhà thì hết bao nhiêu thời gian?
d) Nếu anh ấy chèo thuyền đến điểm Q, rồi đi bộ về nhà thì hết bao nhiêu thời gian?

Bảng tổng hợp sau giới thiệu các bước cơ bản để giải các bài toán tối ưu trong thực tiễn (bằng cách thiết lập hàm số và vận dụng kiến thức đạo hàm tính cực trị).

**CÁC BƯỚC GIẢI BÀI TOÁN TỐI ƯU BẰNG CÁCH SỬ DỤNG ĐẠO HÀM**

**Bước 1. Hiểu vấn đề:** Cần xác định rõ: Điều chưa biết là gì? Các đại lượng đã cho là gì? Các điều kiện đã cho là gì?

**Bước 2. Giới thiệu kí hiệu:** Gán một kí hiệu cho đại lượng sẽ được cực đại hoá hoặc cực tiểu hoá (ví dụ: $L$, $S$, $P$, $Q$,...). Đồng thời chọn các kí hiệu cho các đại lượng chưa biết khác (ví dụ $x$, $t$, $a$, $b$, $c$,...).

**Bước 3. Tìm mối quan hệ giữa các biến:** Thể hiện các thông tin của bài toán dưới dạng các biến số (chọn trong các kí hiệu từ Bước 2). Sử dụng thông tin đã cho để tìm mối quan hệ (ở dạng phương trình) giữa các biến này. Sau đó, sẽ biểu thị mối quan hệ đó dưới dạng một hàm số, chẳng hạn như $L = f(x)$. Tìm miền xác định của hàm số này.

**Bước 4. Phát biểu bài toán:** Phát biểu lại bài toán dưới dạng bài toán tối ưu của hàm số (một biến số).

**Bước 5. Giải quyết vấn đề:** Sử dụng các phương pháp tìm giá trị lớn nhất hoặc giá trị nhỏ nhất của hàm số để giải bài toán tối ưu này (ví dụ sử dụng các kiến thức về đạo hàm của hàm số). Thể hiện lời giải trong ngữ cảnh của bài toán thực tiễn.36

**Ví dụ 1.** Xét bài toán ở HĐ1. Hãy trả lời các câu hỏi sau:

a) Để có thể về nhà trong thời gian ngắn nhất, người đánh cá nên chèo thuyền đến điểm Q cách điểm P về phía bắc bao xa?

b) Nếu chiếc thuyền được gắn thêm động cơ và chạy với vận tốc 5 km/h thì anh ấy có thể lựa chọn quãng đường đi ngắn nhất như thế nào?

**Giải**

Kí hiệu $S_1$ là quãng đường người đánh cá chèo thuyền, $v_1$ là vận tốc chèo thuyền. Kí hiệu $S_2$ là quãng đường người đánh cá đi bộ dọc bờ biển và $v_2$ là vận tốc đi bộ.

a) Vì điểm Q ở phía bắc điểm P với $PQ = x$ (km), $x \in [0; 6]$, nên $S_2 = BQ = 6 - x$ (km).

Do tam giác $APQ$ vuông tại $P$ nên $S_1 = AQ = \sqrt{AP^2 + PQ^2} = \sqrt{2^2 + x^2} = \sqrt{4 + x^2}$.

Từ HĐ1, ta có $v_1 = 3$ km/h, $v_2 = 5$ km/h. Khi đó, thời gian người đánh cá chèo thuyền từ A đến Q là $t_1 = \frac{S_1}{v_1} = \frac{\sqrt{4 + x^2}}{3}$ (giờ). Thời gian anh ấy đi bộ từ Q về B là $t_2 = \frac{S_2}{v_2} = \frac{6 - x}{5}$ (giờ).

Vậy nếu anh ấy chèo thuyền đến Q rồi đi bộ về nhà thì hết $T(x) = \frac{\sqrt{4 + x^2}}{3} + \frac{6 - x}{5}$ (giờ). Tổng thời gian để chèo thuyền và đi bộ về nhà của người đánh cá là

$$
T(x) = \frac{\sqrt{4 + x^2}}{3} + \frac{6 - x}{5}, \quad 0 \leq x \leq 6.
$$

Miền khảo sát của hàm số $T(x)$ là [0; 6]. Chú ý rằng, nếu $x = 0$ thì Q trùng với P, nếu $x = 6$ thì Q trùng với B.

Đạo hàm của hàm $T(x)$ là

$$
T'(x) = \frac{x}{3\sqrt{4 + x^2}} - \frac{1}{5}.
$$

Ta có: $T'(x) = 0 \Leftrightarrow \frac{x}{3\sqrt{4 + x^2}} = \frac{1}{5}$ hay $3\sqrt{4 + x^2} = 5x$. Từ giả thiết $x \geq 0$ ta suy ra $9(4 + x^2) = 25x^2$, hay $16x^2 = 36$. Vậy $x = \frac{3}{2}$.

Vận dụng phương pháp tìm giá trị lớn nhất, giá trị nhỏ nhất của hàm số trên một đoạn, ta có:

$$
T(0) = \frac{28}{15}, \quad T(6) = \frac{\sqrt{40}}{3}, \quad T\left(\frac{3}{2}\right) = \frac{5}{6} + \frac{9}{10} = \frac{26}{15}.
$$

Vì giá trị $T\left(\frac{3}{2}\right)$ là giá trị nhỏ nhất trong ba giá trị trên, nên giá trị nhỏ nhất của $T(x)$ đạt được khi $x = \frac{3}{2}$.

Vậy để có thể về nhà trong thời gian ngắn nhất, anh ấy nên chèo thuyền đến điểm Q cách P về phía bắc 1,5 km.

b) Khi $v_1 = v_2 = 5$ (km/h) thì $T(x) = \frac{\sqrt{4 + x^2}}{5} + \frac{6 - x}{5}$, $x \in [0; 6]$.Khi đó

$$
T'(x) = \frac{x}{5\sqrt{4 + x^2}} - \frac{1}{5} = \frac{1}{5}\left(\frac{x}{\sqrt{4 + x^2}} - 1\right) < 0, \forall x \in [0; 6].
$$

Hàm số $T(x)$ nghịch biến trên đoạn $[0; 6]$ nên giá trị nhỏ nhất của $T(x)$ đạt được khi $x = 6$, tức là khi $Q$ trùng $B$. Vậy nếu chiếc thuyền được gắn thêm động cơ và chạy với vận tốc $5\,\mathrm{km/h}$ thì anh ấy có thể lựa chọn quãng đường đi ngắn nhất là $AB$, tức là đi thuyền thẳng từ $A$ về $B$.

**Luyện tập 1.** Một vật được ném từ mặt đất lên trời xiên góc $\alpha$ so với phương nằm ngang với vận tốc ban đầu $v_0 = 9\,\mathrm{m/s}$ (H.2.10). Khi đó quỹ đạo chuyển động của vật tuân theo phương trình $y = \frac{-g}{2v_0^2\cos^2\alpha}x^2 + x\tan\alpha$, ở đó $x$ (mét) là khoảng cách vật bay được theo phương ngang từ điểm ném, $y$ (mét) là độ cao so với mặt đất của vật trong quá trình bay, $g$ là gia tốc trọng trường (theo Vật lí đại cương, Nhà xuất bản Giáo dục Việt Nam, 2016).

a) Tính độ cao nhất của vật trên quỹ đạo và xác định thời điểm mà vật đạt được độ cao đó (giả sử gia tốc trọng trường là $g = 9,8\,\mathrm{m/s^2}$).

b) Xác định góc ném $\alpha$ để tầm ném xa của vật đạt giá trị lớn nhất.

**Ví dụ 2. (Định luật phản xạ ánh sáng)**

Xét sự phản xạ ánh sáng trên một gương phẳng: Tia sáng đi từ điểm $A$ đến điểm $P$ trên gương phẳng, sau đó bị phản xạ đến điểm $B$ (H.2.11). Theo nguyên lí Fermat, tia sáng di chuyển sao cho đường truyền $APB$ là ngắn nhất. Chứng minh rằng khi đó góc tới $i$ bằng góc phản xạ $i'$.

**Giải**

Theo nguyên lí Fermat, khi đường truyền $APB$ ngắn nhất thì mặt phẳng ($APB$) vuông góc với mặt phẳng gương.

Mặt phẳng qua $A$, $B$ và vuông góc với gương phẳng, cắt gương phẳng theo đường thẳng $d$. Gọi hình chiếu của $A$, $B$ xuống gương phẳng lần lượt là $A'$, $B'$. Đặt $AA' = a$, $BB' = b$ và $A'B' = c$ không đổi.

Giả sử điểm $P$ tuỳ ý trên $d$, nằm trong đoạn $A'B'$ sao cho $A'P = x$, $0 \leq x \leq c$.

Kí hiệu chiều dài đường gấp khúc $APB$ là $L(x)$. Từ hình vẽ ta có

$$
L(x) = AP + PB = \sqrt{a^2 + x^2} + \sqrt{b^2 + (c - x)^2}, \quad 0 \leq x \leq c.
$$

Theo nguyên lí Fermat, ánh sáng tuân theo nguyên tắc đường đi ngắn nhất. Vậy điểm $P$ thuộc đường thẳng $d$ sao cho chiều dài đường gấp khúc $APB$ (tức là $L(x)$) ngắn nhất. Lấy đạo hàm của hàm số $L(x)$ ta có

$$
L'(x) = \frac{x}{\sqrt{a^2 + x^2}} - \frac{c - x}{\sqrt{b^2 + (c - x)^2}}, \quad 0 \leq x \leq c.
$$Xét phương trình $L'(x) = 0$, ta có $\frac{x}{\sqrt{a^2 + x^2}} = \frac{c - x}{\sqrt{b^2 + (c - x)^2}}$.

Với $0 < x < c$ ta được phương trình $\frac{\sqrt{a^2 + x^2}}{x} = \frac{\sqrt{b^2 + (c - x)^2}}{c - x}$ hay $\sqrt{\left(\frac{a}{x}\right)^2 + 1} = \sqrt{\left(\frac{b}{c - x}\right)^2 + 1}$.

Từ đó suy ra $\frac{a}{x} = \frac{b}{c - x}$ hay $x_0 = \frac{ac}{a + b}$.

Vận dụng phương pháp tìm giá trị lớn nhất, giá trị nhỏ nhất của hàm số $L(x)$ trên đoạn $[0; c]$, ta tính các giá trị:

$$
L(0) = a + \sqrt{b^2 + c^2},\ L(c) = b + \sqrt{a^2 + c^2},\ L(x_0) = \sqrt{(a + b)^2 + c^2}.
$$

Dễ thấy rằng $L(x_0)$ là giá trị nhỏ nhất trong các giá trị: $L(0), L(c), L(x_0)$.

Vậy $L(x)$ đạt giá trị nhỏ nhất tại $x_0 = \frac{ac}{a + b}$ thoả mãn $\frac{a}{x_0} = \frac{b}{c - x_0}$ hay $\cot i = \cot i'$, tức là $i = i'$.

Từ đó suy ra, khi đường gấp khúc $APB$ ngắn nhất thì góc tới bằng góc phản xạ.

Định luật phản xạ ánh sáng

- Tia phản xạ nằm trong cùng mặt phẳng với tia tới và đường pháp tuyến của gương tại điểm tới.
- Góc phản xạ bằng góc tới: $i' = i$.

![img-23.jpeg](img-23.jpeg)

**Luyện tập 2.** (Định luật khúc xạ ánh sáng)

Gọi $v_{kk}$ là vận tốc ánh sáng trong không khí và $v_n$ là vận tốc ánh sáng trong nước. Theo nguyên lí Fermat, một tia sáng di chuyển từ một điểm A trong không khí đến một điểm B trong nước theo đường gấp khúc $APB$ sao cho tổng thời gian di chuyển là nhỏ nhất (H.2.13). Vận dụng đạo hàm tìm cực trị của hàm số $T(x)$ (tổng thời gian tia sáng đi từ A đến B theo đường gấp khúc $APB$) để chứng tỏ rằng khi $T(x)$ nhỏ nhất thì góc tới $i$ và góc khúc xạ $r$ thoả mãn

phương trình $\frac{\sin i}{\sin r} = \frac{v_{kk}}{v_n}$.

Phương trình này được gọi là Định luật Snell.

### 2. VẬN DỤNG ĐẠO HÀM ĐỂ GIẢI QUYẾT MỘT SỐ BÀI TOÁN TÔI ƯU TRONG KINH TẾ

Trong phần này, chúng ta sẽ thảo luận về một số ứng dụng của đạo hàm trong kinh tế học. Đầu tiên, chúng ta giới thiệu một số hàm số trong kinh tế học.

**Nhận xét**

- **Hàm chi phí**

Nếu $C(x)$ là tổng chi phí mà công ty (doanh nghiệp) phải trả để sản xuất $x$ đơn vị hàng hóa thì $C(x)$ được gọi là **hàm chi phí**.

- **Hàm cầu**

Gọi $p(x)$ là giá bán mỗi đơn vị hàng hóa khi giao dịch $x$ đơn vị hàng hóa. Khi đó $p(x)$ được gọi là **hàm cầu** (hay **hàm giá**) và hàm số này được kì vọng là hàm giảm theo biến $x$.

- **Hàm doanh thu**

Nếu $x$ đơn vị hàng hóa được bán với giá mỗi đơn vị $p(x)$, thì **hàm doanh thu**, kí hiệu là $R(x)$, được tính bởi công thức

$$
R(x) = x \cdot p(x).
$$

- **Hàm lợi nhuận**

Nếu $x$ đơn vị hàng hóa được bán với giá mỗi đơn vị là $p(x)$, thì **hàm lợi nhuận**, kí hiệu là $P(x)$, được tính bởi công thức

$$
P(x) = R(x) - C(x) = x p(x) - C(x).
$$

![img-25.jpeg](img-25.jpeg)
Hình 2.14

![img-26.jpeg](img-26.jpeg)
Hình 2.15

**Ví dụ 3.** Một cửa hàng đồ điện dân dụng đã bán được 200 máy sấy tóc mỗi tháng với giá mỗi máy là 150 nghìn đồng. Một cuộc khảo sát thị trường chỉ ra rằng, đối với mỗi khoản giảm giá 5 nghìn đồng cho người mua, số lượng máy sấy tóc bán ra sẽ tăng thêm 20 chiếc mỗi tháng.

a) Tìm hàm cầu và hàm doanh thu.

b) Cửa hàng nên giảm giá bao nhiêu để có doanh thu lớn nhất?

**Giải**

Gọi $x$ là số lượng máy sấy tóc bán ra trong một tháng với giá là $p(x)$ (nghìn đồng), $x \geq 200$.

a) Ta đã biết $p(200) = 150$. Vì mỗi khoản giảm giá 5 nghìn đồng cho người mua, số lượng máy sấy tóc bán ra sẽ tăng thêm 20 chiếc mỗi tháng, nên cho mỗi một chiếc máy sấy tóc bán thêm được thì giá phải giảm là $\frac{1}{20} \cdot 5$. Khi đó số lượng máy sấy tóc bán ra $x$ ($x \geq 200$), tăng thêm so với 200 chiếc là $x - 200$ (nghìn đồng).Do vậy hàm cầu: $p(x) = 150 - \frac{1}{20} \cdot 5(x - 200) = 200 - \frac{1}{4} x$.

Hàm doanh thu: $R(x) = x \cdot p(x) = 200x - \frac{1}{4} x^2$.

b) Để tối đa hoá doanh thu, thì ta phải tìm giá trị lớn nhất của hàm $R(x)$ với $x \geq 200$.

Ta có $R'(x) = 200 - \frac{1}{2} x$; $R'(x) = 0$ khi $x = 400$. Sử dụng quy tắc xét dấu đạo hàm bậc nhất của hàm số, ta thấy $R(400) = 40000$ là giá trị lớn nhất của hàm doanh thu, đạt được khi $x = 400$. Khi đó giá của một chiếc máy sấy tóc là $p(400) = 100$ nghìn đồng. Tức là một chiếc máy sấy tóc giảm giá 50 nghìn đồng. Vậy để tối đa hoá doanh thu, cửa hàng nên giảm giá 50 nghìn đồng.

**Ví dụ 4.** Nhân dịp Ngày Quốc tế phụ nữ 8 – 3, câu lạc bộ mĩ thuật của An muốn tổ chức kinh doanh thiệp chúc mừng ngày 8 – 3 để gây quỹ sinh hoạt cho câu lạc bộ. Mỗi tấm thiệp mua về với giá 8 nghìn đồng. Các bạn trong câu lạc bộ sẽ sáng tác thêm nội dung của thiệp (vẽ thêm hình ảnh người, hoa cỏ, lời chúc...) và sau đó bán lại. Với mức giá bán 20 nghìn đồng cho 1 tấm thiệp, câu lạc bộ có thể bán được 500 chiếc. Cứ với mỗi 1 nghìn đồng giảm giá, số lượng hàng bán ra tăng thêm 50 chiếc. Vậy câu lạc bộ nên để giá bán như thế nào để gây được nhiều quỹ sinh hoạt nhất?

**Giải**

Gọi $x$ (nghìn đồng) là số tiền giảm giá cho mỗi tấm thiệp, $0 \leq x \leq 20$.

Số lượng tấm thiệp bán ra là: $500 + 50x$ (chiếc).

Hàm chi phí cho $500 + 50x$ tấm thiệp là $(500 + 50x) \cdot 8$ (nghìn đồng).

Hàm doanh thu cho $500 + 50x$ tấm thiệp là

$$
(500 + 50x) \cdot (20 - x) \text{ (nghìn đồng)}.
$$

Khi đó lợi nhuận thu được là

$$
\begin{array}{l}
P(x) = (20 - x)(500 + 50x) - 8 \cdot (500 + 50x) \\
= (12 - x)(500 + 50x) = 6000 + 100x - 50x^2 \text{ (nghìn đồng)}.
\end{array}
$$

Để tối đa hoá lợi nhuận, thì ta phải tìm giá trị lớn nhất của hàm $P(x)$ với $0 \leq x \leq 20$.

Ta có $P'(x) = 100 - 100x = 0$ khi $x = 1$. Khi đó $P(1) = 6050$ (nghìn đồng) là giá trị lớn nhất của hàm lợi nhuận, đạt được khi $x = 1$. Tức là mỗi tấm thiệp nên giảm giá 1 nghìn đồng. Vậy giá bán mới nên là 19 nghìn đồng thì câu lạc bộ sẽ gây được nhiều quỹ sinh hoạt nhất.

**Luyện tập 3.** Một doanh nghiệp tư nhân A chuyên kinh doanh xe gắn máy các loại. Hiện nay, doanh nghiệp đang tập trung chiến lược kinh doanh một loại xe máy với chi phí mua vào là 27 triệu đồng/chiếc và giá bán ra là 31 triệu đồng/chiếc. Với giá bán này thì số lượng xe bán ra mỗi năm là 600 chiếc. Nhằm tiêu thụ dòng xe đang ăn khách này, doanh nghiệp dự định giảm giá bán. Ước tính rằng cứ giảm 1 triệu đồng/chiếc thì số lượng xe bán ra trong một năm tăng thêm 200 chiếc. Vậy doanh nghiệp phải định giá bán mới là bao nhiêu để thu được lợi nhuận cao nhất?

**Nhận xét**

Chi phí biên là tốc độ thay đổi của hàm chi phí $C(x)$ đối với $x$, tức là đạo hàm $C'(x)$.

Đạo hàm $R'(x)$ của hàm doanh thu $R(x)$ được gọi là hàm doanh thu biên và là tốc độ thay đổi của doanh thu đối với số lượng đơn vị sản phẩm bán ra.

Hàm lợi nhuận biên là đạo hàm $P'(x)$ của hàm lợi nhuận.

**Ví dụ 5.** Nếu $C(x)$ là chi phí sản xuất $x$ đơn vị hàng hoá, thì chi phí trung bình cho mỗi đơn vị hàng hoá là $c(x) = \frac{C(x)}{x}$.

Biết rằng hàm chi phí cho bởi công thức

$$
C(x) = 3400 + 6x + 0,02x^2 \text{ (nghìn đồng)}.
$$

a) Hãy tìm chi phí, chi phí trung bình và chi phí biên ở mức sản xuất 500, 1 000, 2 000 đơn vị hàng hoá.

b) Xác định mức sản xuất để chi phí trung bình là nhỏ nhất.

**Giải**

a) Chi phí biên là

$$
C'(x) = 6 + 0,04x.
$$

Chi phí trung bình là

$$
c(x) = \frac{C(x)}{x} = \frac{3400}{x} + 6 + 0,02x.
$$

Khi đó ta có

|  x | Chi phí $C(x)$ | Chi phí biên $C'(x)$ | Chi phí trung bình $c(x) = \frac{C(x)}{x}$  |
| --- | --- | --- | --- |
|  500 | 11 400 | 26 | 22,8  |
|  1 000 | 29 400 | 46 | 29,4  |
|  2 000 | 95 400 | 86 | 47,7  |

b) Ta cần tìm $x$ để $c(x)$ nhỏ nhất. Ta có:

$$
c'(x) = \frac{-3\,400}{x^2} + 0,02; \quad c'(x) = 0 \Leftrightarrow x^2 = \frac{3\,400}{0,02} = 170\,000 \Leftrightarrow x = 100\sqrt{17}.
$$

Khi đó $c(x)$ đạt giá trị nhỏ nhất tại $x = 100\sqrt{17} \approx 412,3$. Ta có $c(412) < c(413)$.

Do số đơn vị hàng hóa $x$ phải là số nguyên dương nên chi phí trung bình $c(x)$ là nhỏ nhất khi mức sản xuất là $x = 412$ đơn vị hàng hóa.

**Luyện tập 4.** Biết rằng $C(x) = 16\,000 + 500x - 1,64x^2 + 0,004x^3$ là hàm chi phí và $p(x) = 1\,700 - 7x$ là hàm cầu của $x$ đơn vị hàng hóa. Hãy tìm mức sản xuất để lợi nhuận là lớn nhất.

### BÀI TẬP

2.6. Một cửa sổ có dạng phía dưới là hình chữ nhật, phía trên là nửa hình tròn có đường kính bằng chiều rộng của hình chữ nhật (H.2.17). Biết độ dài mép ngoài của cửa sổ, phần sát tường (kể cả phần nửa đường tròn phía trên) là 10 m. Hãy tính các kích thước của hình chữ nhật để cửa sổ có diện tích lớn nhất (kết quả làm tròn đến chữ số thập phân thứ hai).

2.7. Người ta muốn kéo một đường dây điện từ nhà máy điện đặt tại điểm A đến một hòn đảo nhỏ C. Biết rằng nhà máy điện nằm sát bờ biển, bờ biển được coi là thẳng, khoảng cách CB từ hòn đảo C đến bờ biển là 1 km, khoảng cách giữa hai điểm A và B là 4 km. Mỗi kilômét dây điện nếu đặt ngầm dưới nước sẽ mất 5 000 USD, còn nếu đặt ngầmdưới đất sẽ mất 3 000 USD. Người ta dự định kéo dây điện ngầm dưới đất từ điểm A đến một điểm S trên bờ biển, nằm giữa A và B, sau đó chạy ngầm dưới nước từ điểm S đến hòn đảo C (H. 2.18). Tìm vị trí của điểm S sao cho chi phí kéo đường dây điện là nhỏ nhất.

2.8. Một xe khách tuyến có sức chứa tối đa là 60 hành khách. Nếu chuyến xe chở x hành khách thì giá cho mỗi hành khách là 50 000 $\left(3 - \frac{x}{40}\right)^2$ (đồng). Xe có doanh thu cao nhất khi chở bao nhiêu hành khách, và doanh thu đó bằng bao nhiêu?

2.9. Một công ty dự kiến chi 1 tỉ đồng sản xuất các thùng đựng sơn hình trụ với dung tích 5 l. Giá sản xuất mặt xung quanh là 100 nghìn đồng/m², giá sản xuất mặt đáy là 120 nghìn đồng/m². Hỏi công ty có thể sản xuất được tối đa bao nhiêu thùng sơn? (Giả sử chi phí cho các mối nối không đáng kể)

2.10. Giả sử $C(x) = 18\,000 + 500x - 1,6x^2 + 0,004x^3$ (nghìn đồng) là hàm chi phí và $p(x) = 1\,500 - 3x$ (nghìn đồng) là hàm cầu của x đơn vị một loại hàng hoá nào đó.

a) Tìm công thức của hàm lợi nhuận $P(x)$, biết rằng hàm lợi nhuận bằng hiệu của hàm doanh thu và hàm chi phí.

b) Tìm mức sản xuất $x$ để lợi nhuận thu được là lớn nhất.

## BÀI TẬP CUỐI CHUYÊN ĐỀ 2

2.11. Một cửa hàng chuyên về cà phê, có sẵn 75 kg cà phê Colombia nguyên chất và 120 kg cà phê thương hiệu của cửa hàng. Những thứ này sẽ được pha thành các gói cà phê 1 kg như sau: Một gói tiêu chuẩn có chứa 250 g cà phê Colombia nguyên chất và 750 g cà phê thương hiệu; một gói cao cấp chứa 500 g cà phê Colombia nguyên chất và 500 g cà phê thương hiệu.

a) Gọi x là số gói cà phê tiêu chuẩn và y là số gói cà phê cao cấp, hãy viết hệ bất phương trình bậc nhất mô tả số lượng gói có thể có của mỗi loại.

b) Biểu diễn hình học miền nghiệm của hệ bất phương trình bậc nhất nhận được ở câu a và tìm các đỉnh của miền nghiệm.

c) Lợi nhuận của mỗi gói cà phê tiêu chuẩn là 30 nghìn đồng và của mỗi gói cà phê cao cấp là 40 nghìn đồng. Hỏi cần chuẩn bị bao nhiêu gói cà phê mỗi loại để lợi nhuận thu được là lớn nhất? Giả sử rằng tất cả các gói cà phê đã chuẩn bị đều có thể bán được.

2.12. Một nhà máy sản xuất hai loại sản phẩm, mỗi sản phẩm yêu cầu sử dụng ba máy. Máy đầu tiên có thể được sử dụng nhiều nhất là 70 giờ, máy thứ hai nhiều nhất là 40 giờ và máy thứ ba nhiều nhất là 90 giờ. Sản phẩm thứ nhất cần 2 giờ trên máy I, 1 giờ trên máy II và 1 giờ trên máy III; sản phẩm thứ hai cần 1 giờ cho mỗi máy I, II và 3 giờ trên máy III. Nếu lợi nhuận là 400 nghìn đồng/đơn vị cho sản phẩm thứ nhất và 600 nghìn đồng/đơn vị cho sản phẩm thứ hai, thì cần sản xuất bao nhiêu đơn vị mỗi sản phẩm để lợi nhuận thu được là lớn nhất?

2.13. Một công ty bán hàng toàn quốc đang lên kế hoạch tổ chức cuộc họp bán hàng tại Đà Nẵng. Giá vé máy bay khứ hồi thấp nhất từ Hà Nội đến Đà Nẵng là 2 triệu đồng và giá vé khứ hồi thấp nhất từ Thành phố Hồ Chí Minh đến Đà Nẵng là 2,4 triệu đồng. Có 28 đại diện bán hàng ở Hà Nội và 22 đại diện bán hàng ở Thành phố Hồ Chí Minh có thể đến Đà Nẵng dự cuộc họp này. Tổng cộng ít nhất 40 đại diện bán hàng từ Hà Nội và Thành phố Hồ Chí Minh phải tham dự cuộc họp này với ít nhất 12 người từ Hà Nội và 16 người từ Thành phố Hồ Chí Minh. Cần cử bao nhiêu đại diện bán hàng ở Hà Nội và bao nhiêu đại diện bán hàng ở Thành phố Hồ Chí Minh đến dự cuộc họp bán hàng ở Đà Nẵng để tổng chi phí vé máy bay là nhỏ nhất?

2.14. Một vật nặng có khối lượng m được kéo dọc theo mặt phẳng nằm ngang nhờ một sợi dây hợp với phương ngang một góc 0. Trong Vật lí, ta biết rằng lực kéo F cần thiết để di chuyển vật được cho bởi công thức

$$
F = \frac {cmg}{c \sin \theta + \cos \theta},
$$

trong đó g là gia tốc trọng trường và c là hệ số ma sát của bề mặt (Theo Sullivan and Miranda, Calculus, W.H. Freeman and Company, 2014). Chứng tỏ rằng lực kéo F nhỏ nhất khi tan θ = c.

442.15. Một bức tranh cao 4 m được treo trên tường có mép dưới cao hơn tầm mắt người quan sát 3 m (như hình vẽ). Người quan sát phải đứng cách tường bao nhiêu mét để có được tầm nhìn thuận lợi nhất (tức là, có góc nhìn ở lớn nhất)?

2.16. Một khu vực hình tròn có bán kính 20 m được bao quanh bởi một lối đi bộ (như hình vẽ). Một bóng đèn được lắp ở trên đỉnh cột nằm ở tâm của khu vực. Hỏi độ cao của cột đèn là bao nhiêu thì sẽ chiếu sáng mạnh nhất cho lối đi bộ? Biết rằng cường độ chiếu sáng được cho bởi công thức $$I = \frac{\sin \theta}{s}$$, trong đó $s$ là khoảng cách từ nguồn sáng và $\theta$ là góc mà ánh sáng chiếu vào bề mặt.

2.17. Giả sử một loại hàng hoá có hàm cầu được mô hình hoá bởi $p = 100 - 0,5x$ và hàm chi phí được mô hình hoá bởi $C = 40x + 37,5$, trong đó $p$ (nghìn đồng) là giá của một đơn vị hàng hoá đó.

a) Mức giá nào sẽ mang lại lợi nhuận lớn nhất?
b) Khi lợi nhuận là lớn nhất, chi phí trung bình cho mỗi đơn vị là bao nhiêu?

# CHUYÊN ĐỀ 3 ỨNG DỤNG TOÁN HỌC TRONG MỘT SỐ VẤN ĐỀ LIÊN QUAN ĐẾN TÀI CHÍNH

Chuyên đề này giới thiệu những kiến thức cơ bản về tiền tệ, lãi suất, lạm phát, thẻ tín dụng, vay nợ, cũng như cách thức tính lãi suất, các hình thức gửi tiết kiệm, trả các khoản nợ đúng hạn. Qua đó, có thể vận dụng các kiến thức đã học để thiết lập kế hoạch tài chính cá nhân cho các nhu cầu dài hạn cũng như giải quyết một số vấn đề về đầu tư.

## Bài 5 TIỀN TỆ, LÃI SUẤT

**THUẬT NGỮ**

- Tiền tệ
- Lãi đơn
- Lãi kép
- Lạm phát
- Lãi suất thực

**KIẾN THỨC, KĨ NĂNG**

- Nhận biết một số vấn đề về tiền tệ.
- Nhận biết một số vấn đề về lãi suất của các tổ chức tín dụng.
- Tính lãi suất được hưởng qua tiền tiết kiệm và các giá trị thực chất có tính đến lạm phát.
- Vận dụng kiến thức toán học trong việc giải quyết một số vấn đề về lãi suất của các tổ chức tín dụng.

Bác An có 500 triệu đồng muốn gửi vào ngân hàng trong thời hạn 9 tháng để lấy lãi. Bác đang phân vân giữa hai phương án như sau:

- Phương án 1: Tiền gửi tính theo lãi đơn, với lãi suất năm là 6,1%;
- Phương án 2: Tiền gửi tính theo lãi kép kì hạn 1 tháng, với lãi suất năm là 6%.

Hình thức gửi tiền nào có lợi hơn cho bác An?

### 1. KHÁI NIỆM TIẾN TỆ

(Nguồn: N. Gregory Mankiw, Macroeconomics, 8th edition, Worth Publishers, 2012).

#### a) Khái niệm tiền tệ

Tiền tệ là một phương tiện thanh toán chính quy theo pháp luật, được sử dụng với mục đích trao đổi hàng hóa, dịch vụ của một khu vực, quốc gia hay một nền kinh tế. Vì vậy, tiền tệ còn được gọi là “tiền lưu thông”.

Thông thường, tiền tệ được phát hành bởi cơ quan nhà nước (như ngân hàng trung ương). Bản thân tiền tệ thực ra không có giá trị. Giá trị của nó phụ thuộc vào giá trị mà nó đại diện, tùy theo nền kinh tế và nhà phát hành. Giá cả của tiền tệ chính là lãi suất, nói một cách khác, giá cả của tiền tệ là số tiền mà người ta phải trả cho cơ hội được vay nó trong một khoảng thời gian xác định.

Khi phân biệt tiền tệ của quốc gia này với tiền tệ của quốc gia khác, người ta dùng cụm từ “đơn vị tiền tệ”. Đơn vị tiền tệ của nhiều quốc gia có thể có cùng tên gọi và để phân biệt chúng, người ta thường phải gọi kèm tên quốc gia sử dụng đồng tiền, ví dụ đô la Mỹ, đô la Úc, đô la Singapore...

> Hãy kể tên các mệnh giá thường gặp của tờ tiền đồng Việt Nam.

#### b) Chức năng của tiền tệ

Tiền tệ có ba chức năng cơ bản:

- Là phương tiện đo lường giá trị: Tiền tệ là phương tiện để đo lường giá trị của hàng hóa, dịch vụ. Mỗi hàng hóa sẽ được định giá trị bằng tiền tệ, nó tương tự như cách chúng ta định khối lượng bằng cân hay định chiều dài bằng mét. Giá trị của hàng hóa khi được biểu hiện bằng tiền tệ gọi là giá cả. Giá cả này lại chịu ảnh hưởng từ nhiều nhân tố khác như giá trị hàng hóa, giá trị của tiền tệ và quan hệ cung cầu trên thị trường.

- Là phương tiện trao đổi, thanh toán: Tiền tệ làm đơn giản hóa quá trình trao đổi hàng hóa, dịch vụ giữa các chủ thể. Tiền có thể được dùng để giao dịch mua bán, trả nợ, nộp thuế,... Tiền tệ được công nhận và có độ chính xác cao về giá trị trao đổi. Tiền tệ đóng vai trò là vật trung gian, vật ngang giá chung. Tiền tệ là phương tiện giúp cho hoạt động mua bán được diễn ra thuận tiện và nhanh chóng.

- Là phương tiện tích lũy tài sản: Vì có thể dễ dàng đổi tiền lấy các hàng hóa cần thiết vào thời điểm cần thiết, nên giữ tiền là một hình thức tích trữ tài sản để dùng trong tương lai. Tiền tệ được xem là tài sản tích lũy khi tiền được rút khỏi hoạt động lưu thông trên thị trường và đem đi cất trữ. Lượng tiền cất trữ càng nhiều thì của cải vật chất trong xã hội càng lớn.

Hình thức trao đổi trực tiếp hàng hóa khi chưa xuất hiện tiền tệ (tranh minh hoạ)

c) Tính chất của tiền tệ

Để có thể thực hiện được các chức năng của tiền, tiền tệ phải có những tính chất cơ bản sau đây:

- Dễ bảo quản, dễ vận chuyển, dễ chia nhỏ để tiện lợi cho việc tích trữ tài sản và trao đổi hàng hoá.
- Tính đồng nhất: Dù là tiền bằng chất liệu gì, phát hành vào thời điểm nào, nhưng nếu có tổng mệnh giá như nhau theo cùng một đơn vị tiền nào đó thì có giá trị bằng nhau.
- Được tin tưởng và chấp nhận: Mọi người chấp nhận là tiền có giá trị, sẵn sàng đổi hàng hoá của mình lấy tiền. Để được tin tưởng và chấp nhận, tiền phải có được giá trị ổn định, lượng cung hạn chế và khó làm giả.

d) Nguyên tắc tổng tiền bằng 0

Mọi khoản tiền dương mà một tổ chức hay cá nhân nào đó đang có đều ứng với khoản nợ mà những tổ chức, cá nhân khác nợ người này, và ngược lại mọi khoản tiền âm của ai đó đều ứng với những khoản tiền dương mà những người khác cho người đó vay. Tổng quát: Tổng tiền pháp định (tức là đồng tiền được phát hành chính thức bởi cơ quan nhà nước), kể cả các khoản dương (cho vay) và khoản âm (vay), là bằng 0. Đây gọi là nguyên tắc tổng tiền bằng 0.

Nguyên tắc tổng tiền bằng 0 cho ta thấy một điều rất rõ là: tổng cộng giá trị của tất cả các tài sản trên thế giới chính là do giá trị của các tài sản (ngoài tiền) tạo thành, chứ không phải do giá trị của tiền tạo thành. Tiền chỉ có tác dụng làm thước đo của tài sản và làm công cụ giao dịch tài sản, thêm tiền pháp định lưu hành trên thế giới không có nghĩa là thế giới có thêm tài sản.

### 2. LÃI SUẤT VÀ CÁCH TỈNH LÃI SUẤT

Số tiền vay của một cá nhân từ ngân hàng hoặc tổ chức tín dụng dưới hình thức cho vay hay số tiền vay của ngân hàng từ một cá nhân dưới hình thức tài khoản tiết kiệm, được gọi là tiền vốn (hay tiền gốc).

Tiền lãi được hiểu là thu nhập từ một khoản vay bằng tiền tệ. Đây là số tiền mà người đi vay phải trả cho người cho vay, để bù đắp cho lợi ích của việc nắm giữ một lượng tiền trong một khoảng thời gian nhất định.

Lãi suất là tỉ lệ mà theo đó tiền lãi được người vay trả cho việc sử dụng tiền mà họ vay từ người cho vay. Lãi suất thường được thể hiện như là tỉ lệ phần trăm của tiền gốc trong khoảng thời gian một năm.

Có hai hình thức tính lãi thường gặp: Lãi đơn và lãi kép (còn gọi là lãi gộp).

Những lưu ý quan trọng đối với một khoản vay:

- Số tiền cho vay;
- Thời gian cho vay;
- Lãi suất;
- Kì tính lãi;
- Hình thức trả nợ.

#### a) Lãi đơn

Lãi đơn là phương thức tính lãi mà tiền lãi sau mỗi kì không được nhập vào vốn để tính lãi cho kì sau. Tiền lãi của mỗi kì đều được tính theo vốn gốc ban đầu và đều bằng nhau.

**HĐ1.** Xây dựng công thức lãi đơn

Giả sử gửi một khoản tiền vốn P vào ngân hàng theo thể thức lãi đơn với lãi suất năm là r (r được cho dưới dạng số thập phân).

a) Tính số tiền lãi / nhận được sau t năm.

b) Số tiền nhận được sau t năm bao gồm số tiền vốn P ban đầu và số tiền lãi I. Hãy tính tổng số tiền A nhận được sau t năm.

Ngân hàng thường công bố lãi suất năm dưới dạng phần trăm. Lãi suất r = 5% nghĩa là

$$
r = 5\% = \frac{5}{100} = 0,05.
$$

**Công thức lãi đơn**

- Nếu gửi một khoản tiền vốn P với lãi suất đơn là r mỗi năm trong thời hạn t năm, thì số tiền lãi I được nhận là

$$
I = Prt.
$$

- Số tiền A được nhận sau t năm là tổng số tiền vốn P ban đầu và số tiền lãi được nhận, và bằng

$$
A = P + I = P(1 + rt).
$$

**Chú ý.** Lãi đơn chủ yếu được dùng cho các khoản gửi hoặc đầu tư ngắn hạn (thường là dưới 1 năm). Trong một số trường hợp, thời gian gửi hoặc đầu tư t được tính chính xác theo ngày và người ta thường quy ước một năm tài chính có 365 ngày. Khi đó công thức tính lãi đơn là:

$$
I = \frac{Prt}{365},
$$

ở đó t là số ngày gửi (hoặc đầu tư) thực tế của khoản gửi đó.

**Ví dụ 1.** Bác An cho một tổ chức tín dụng vay 100 triệu đồng trong thời hạn 9 tháng với lãi suất đơn là 10% mỗi năm. Tính số tiền lãi và tổng số tiền bác An nhận được sau 9 tháng.

**Giải**

Ở đây ta có:

$$
P = 100 \text{ (triệu đồng)}; \quad r = 10\% = 0,1; \quad t = \frac{9}{12} = \frac{3}{4} \text{ (năm)}.
$$

Số tiền lãi bác An nhận được là:

$$
I = Prt = 100 \cdot 0,1 \cdot \frac{3}{4} = 7,5 \text{ (triệu đồng)}.
$$

Tổng số tiền bác An nhận được là:

$$
A = P + I = 100 + 7,5 = 107,5 \text{ (triệu đồng)}.
$$

**Luyện tập 1.** Anh Hưng cho một tổ chức tín dụng vay 50 triệu đồng trong thời hạn 6 tháng theo thể thức lãi đơn. Lãi suất năm của khoản cho vay này là bao nhiêu nếu số tiền anh Hưng nhận được sau 6 tháng là 52 triệu đồng?50

#### b) Lãi kép

Lãi kép là phương thức tính lãi mà tiền lãi sau mỗi kì được nhập vào tiền vốn để được tiền vốn mới, dùng để tính lãi cho kì tiếp theo.

**HĐ2.** Xây dựng công thức lãi kép

Giả sử gửi một khoản tiền vốn P vào ngân hàng theo thể thức lãi kép với lãi suất năm là r (r được cho dưới dạng số thập phân), được tính lãi n kì trong một năm.

a) Tính lãi suất của mỗi kì.
b) Tính số tiền nhận được (cả vốn lẫn lãi) sau 1 kì, sau 2 kì.
c) Dự đoán công thức tính số tiền nhận được sau N kì gửi.

Công thức lãi kép

Số tiền A thu được sau t năm do một khoản vốn P được đầu tư theo thể thức lãi kép theo định kì, với lãi suất hằng năm r và được tính lãi n kì mỗi năm, là

$$
A = P \left(1 + \frac {r}{n}\right) ^ {n t}.
$$

**Chú ý.** Trong công thức lãi kép, số tiền A thường được gọi là giá trị tương lai và P được gọi là giá trị hiện tại của tài khoản.

Lãi kép thường được sử dụng cho các khoản gửi tiết kiệm hoặc các khoản đầu tư trung và dài hạn.

**Ví dụ 2.** Một người gửi tiết kiệm 100 triệu đồng theo thể thức lãi kép với lãi suất năm là 9% thì số tiền nhận được sau 3 năm là bao nhiêu nếu việc tính lãi diễn ra:

a) Hằng năm?
b) Hằng quý?
c) Hằng tháng?

Tính số tiền lãi nhận được trong mỗi trường hợp.

**Giải**

Sử dụng công thức lãi kép, ta có:

$$
P = 100 \text{ (triệu đồng)}; r = 9\% = 0,09; t = 3 \text{ năm}.
$$

a) Khi tính lãi hằng năm thì số kì tính lãi trong một năm là $n = 1$.

Do đó số tiền nhận được là:

$$
A = P \left(1 + r\right) ^ {t} = 100 \cdot \left(1 + 0,09\right) ^ {3} \approx 129,503 \text{ (triệu đồng)}.
$$

Số tiền lãi là:

$$
129,503 - 100 = 29,503 \text{ (triệu đồng)}.
$$

b) Khi tính lãi hằng quý thì số kì tính lãi trong một năm là $n = 4$. Do đó số tiền nhận được là:

$$
A = P \left(1 + \frac {r}{4}\right) ^ {4 t} = 100 \cdot \left(1 + \frac {0,09}{4}\right) ^ {12} \approx 130,605 \text{ (triệu đồng)}.
$$

Số tiền lãi là:

$$
130,605 - 100 = 30,605 \text{ (triệu đồng)}.
$$

c) Khi tính lãi hằng tháng thì số kí tính lãi trong một năm là $n = 12$. Do đó số tiền nhận được là:

$$
A = P \left(1 + \frac {r}{12}\right) ^ {12t} = 100 \cdot \left(1 + \frac {0,09}{12}\right) ^ {36} \approx 130,865 \text{ (triệu đồng)}.
$$

Số tiền lãi là:

$$
130,865 - 100 = 30,865 \text{ (triệu đồng)}.
$$

**Luyện tập 2.** Trở lại Ví dụ 2, hãy tính số tiền nhận được và số tiền lãi tương ứng sau 3 năm gửi tiết kiệm nếu việc tính lãi diễn ra hằng ngày (giả sử một năm có 365 ngày).

**Vận dụng.** Giải quyết bài toán trong Tình huống mở đầu.

### 3. LẠM PHÁT

#### a) Khái niệm lạm phát, tỉ lệ lạm phát

(Nguồn: N. Gregory Mankiw, Macroeconomics, 8th edition, Worth Publishers, 2012).

Lạm phát là sự tăng mức giá chung một cách liên tục của hàng hóa, dịch vụ theo thời gian và là sự mất giá trị của một loại tiền tệ nào đó. Khi mức giá chung tăng cao, một đơn vị tiền tệ sẽ mua được ít hàng hóa và dịch vụ hơn so với trước đây, do đó lạm phát phản ánh sự suy giảm sức mua trên một đơn vị tiền tệ.

Sức mua là số lượng hàng hóa hay dịch vụ có thể mua được bằng 1 đơn vị tiền tệ. Ví dụ, với 100 nghìn đồng vào thời điểm tháng 1/2024 có thể mua được hơn 4 lít xăng RON 95.

Tỉ lệ lạm phát là tốc độ tăng mật bằng giá của nền kinh tế. Nó cho thấy mức độ lạm phát của nền kinh tế. Chẳng hạn, tỉ lệ lạm phát hằng năm là 3% nghĩa là sức mua trị giá 1 triệu đồng bây giờ sẽ chỉ còn sức mua 970 nghìn đồng trong một năm tới vì 3% của 1 triệu đồng ban đầu đã bị xói mòn do lạm phát.

Thông thường, tỉ lệ lạm phát được tính dựa vào chỉ số giá tiêu dùng CPI hoặc chỉ số giảm phát GDP. Tỉ lệ lạm phát có thể được tính cho một tháng, một quý, nửa năm hay một năm.

Tỉ lệ lạm phát là thước đo tỉ lệ giảm xuống sức mua của đồng tiền. Nó là một biến số được sử dụng để tính toán lãi suất thực cùng như điều chỉnh mức lương.

**Ví dụ 4.** Giả sử tỉ lệ lạm phát trung bình hằng năm là $g$ (biểu thị dưới dạng số thập phân), $g < 1$. Khi đó sức mua $A$ mà số tiền $P$ (tại thời điểm hiện tại) sẽ mua được sau $n$ năm nữa là

$$
A = P \left(1 - g\right) ^ {n}.
$$

(Theo M. Sullivan, Finite Mathematics, 11th edition, Wiley, 2010)

a) Nếu tỉ lệ lạm phát hằng năm là 4%, thì sức mua của 1 triệu đồng là bao nhiêu sau 3 năm nữa?

b) Nếu số tiền 1 triệu đồng chỉ còn sức mua 900 nghìn đồng sau 2 năm, thì tỉ lệ lạm phát trung bình mỗi năm là bao nhiêu phần trăm (làm tròn đến chữ số thập phân thứ nhất)?52

**Giải**

a) Sức mua của 1 triệu đồng sau 3 năm nữa là:

$$
A = 1 \cdot (1 - 0,04)^2 = 0,884736 \text{ (triệu đồng)}.
$$

Vậy sau 3 năm nữa thì sức mua của 1 triệu đồng chỉ còn 884 736 đồng.

b) Ta có: $A = 0,9; P = 1; n = 2$. Do đó, từ công thức $A = P(1 - g)^2$ suy ra

$$
g = 1 - \sqrt{\frac{A}{P}} = 1 - \sqrt{\frac{0,9}{1}} \approx 0,051.
$$

Vậy tỉ lệ lạm phát trung bình hằng năm là khoảng 5,1%.

**Luyện tập 4.** Giả sử tỉ lệ lạm phát trung bình hằng năm là 4%. Sử dụng công thức tính sức mua ở Ví dụ 4, hãy cho biết mất bao nhiêu năm thì sức mua giảm xuống chỉ còn một nửa?

#### b) Các giá trị thực chất có tính đến lạm phát

Nếu $r$ là lãi suất năm của thị trường (biểu thị dưới dạng số thập phân), 1 đồng đầu tư vào đầu năm sẽ trở thành $(1 + r)$ đồng vào cuối năm.

Tuy nhiên, nếu tỉ lệ lạm phát của nền kinh tế là $g$, thì sức mua của $(1 + r)$ đồng chỉ là $\frac{1 + r}{1 + g}$.

Từ đó, lãi suất thực là

$$
r_{\text{thực}} = \frac{1 + r}{1 + g} - 1 = \frac{r - g}{1 + g}.
$$

Dễ thấy khi $g = 0$ thì $r_{\text{thực}} = r$ và lãi suất thực dương nếu lãi suất gửi lớn hơn tỉ lệ lạm phát, lãi suất thực âm nếu lãi suất gửi nhỏ hơn tỉ lệ lạm phát.

> **Ví dụ 5.** Anh Nam gửi tiết kiệm 500 triệu đồng kì hạn 12 tháng, với lãi suất năm là 9%. Giả sử tỉ lệ lạm phát của nền kinh tế năm đó là 4%. Cuối kì hạn gửi, anh Nam rút tiền cả vốn lẫn lãi.

a) Thu nhập thực (tức là số tiền lãi thu được tính theo lãi suất thực, đã tính đến yếu tố lạm phát) cho khoản gửi tiết kiệm của anh Nam là bao nhiêu?

b) Thu nhập thực sau thuế của anh Nam là bao nhiêu, nếu giả sử anh Nam phải nộp thuế thu nhập cá nhân 10%?

**Giải**

Ta có: $P = 500$ (triệu đồng); $r = 9\% = 0,09$; $g = 4\% = 0,04$.

a) Lãi suất thực cho khoản gửi tiết kiệm của anh Nam là:

$$
r_{\text{thực}} = \frac{r - g}{1 + g} = \frac{0,09 - 0,04}{1 + 0,04} \approx 0,048.
$$

Vậy thu nhập thực của anh Nam là

$$
500 \cdot 0,048 = 24 \text{ (triệu đồng)}.
$$

b) Lãi suất thực sau thuế khi chưa tính lạm phát là:

$$
r_{\text{sau thuế}} = 9\% \cdot (100\% - 10\%) = 8,1\% = 0,081.
$$

Do đó thu nhập thực sau khi tính thuế của anh Nam là:

$$
500 \cdot \frac{0,081 - 0,04}{1 + 0,04} \approx 19,712 \text{ (triệu đồng)}.
$$Chú ý. Trong trường hợp mà tỉ lệ lạm phát thấp (g nhỏ, ví dụ không quá 5%), người ta coi $1 + g \times \text{ấp} \times i$ bằng 1 và thường dùng công thức gần đúng sau $r_{\text{thực}} = r - g$, tức là lãi suất thực xấp xỉ bằng lãi suất danh nghĩa trừ đi tỉ lệ lạm phát.

**Luyện tập 5.** Thực hiện các yêu cầu như trong Ví dụ 5, nếu tỉ lệ lạm phát của nền kinh tế năm đó là 7%.

### BÀI TẬP

3.1. Tìm lãi suất đơn (tính theo năm), biết số tiền vốn ban đầu là 900 triệu đồng và số tiền lãi thu được trong thời hạn 6 tháng là 54 triệu đồng.

3.2. Tìm thời gian gửi $t$ (tính theo ngày), để 100 triệu đồng tích luỹ được thành 105 triệu đồng với lãi suất đơn là 11% một năm. Ở đây một năm tài chính được lấy là 365 ngày.

3.3. Ngân hàng A đấu giá lò trái phiếu Chính phủ có mệnh giá 100 tỉ đồng, thời hạn 9 tháng với mức giá sẵn lòng trả là 96 tỉ đồng. Giả sử cuộc đấu giá thành công như mong muốn thì ngân hàng A sẽ được hưởng lãi suất bao nhiêu, nếu tính theo hình thức lãi suất đơn.

3.4. Tính số tiền A thu được sau 5 năm nếu số tiền 200 triệu đồng được gửi ngân hàng với lãi suất 9% một năm theo thể thức:

a) Tính lãi kép hằng năm;

b) Tính lãi kép hằng quý.

Tính số tiền lãi tương ứng trong mỗi trường hợp.

3.5. Giả sử tỉ lệ lạm phát của nền kinh tế là 3,5%/năm.

a) Với tỉ lệ lạm phát này, sức mua của 10 triệu đồng ở hiện tại là bao nhiêu sau 1 năm nữa?

b) Một người gửi tiết kiệm 600 triệu đồng kì hạn 12 tháng với lãi suất năm là 8%. Hỏi thu nhập thực của người đó khi rút số tiết kiệm sau 1 năm nữa, tức là tiền lãi gửi tiết kiệm sau khi tính theo lãi suất thực đã tính đến yếu tố lạm phát, là bao nhiêu?

3.6. Chỉ số giá tiêu dùng (CPI) cho biết sự thay đổi tương đối về giá theo thời gian của một giỏ hàng hoá và dịch vụ cố định. Nó là một chỉ số giá sinh hoạt giúp đo lường ảnh hưởng của lạm phát đến chi phí hàng hoá và dịch vụ. Nếu lấy chỉ số CPI của kì gốc 2014 để so sánh (coi CPI cho năm này là 100) thì chỉ số CPI tháng 1 năm 2020 là 118,09 (Theo Tổng cục thống kê). Điều này có nghĩa là 100 nghìn đồng trong năm 2014 có sức mua tương đương với 118,09 nghìn đồng vào tháng 1 năm 2020. Nói chung, nếu tỉ lệ lạm phát trung bình là $g$ mỗi năm ($g$ cho dưới dạng số thập phân) trong $n$ năm, thì chỉ số CPI sau $n$ năm là

$$
CPI = CPI_0 (1 + g)^n,
$$

ở đó $CPI_0$ là CPI tại đầu của chu kì $n$ năm.

a) Chỉ số CPI là 100 vào tháng 1 năm 2014 và 118,09 vào tháng 1 năm 2020. Giả sử rằng tỉ lệ lạm phát hằng năm không đổi trong khoảng thời gian này, hãy xác định tỉ lệ lạm phát trung bình hằng năm trong giai đoạn này.

b) Sử dụng tỉ lệ lạm phát tính được từ câu a, CPI sẽ đạt mức 115 vào năm nào?

c) Nếu CPI tháng 1 năm 2020 là 118,09 và tỉ lệ lạm phát trung bình hằng năm là 3,21% thì CPI vào tháng 1 năm 2030 sẽ là bao nhiêu?

d) Nếu tỉ lệ lạm phát trung bình hằng năm là 3%, thì sẽ mất bao lâu để chỉ số giá tiêu dùng tăng gấp đôi?

## Bài 6 TÍN DỤNG. VAY NỢ

**THUẬT NGỮ**

- Thẻ tín dụng
- Phí sử dụng thẻ
- Vay trả góp

**KIẾN THỨC, KĨ NĂNG**

- Tính lãi suất được hưởng hoặc lãi suất cần trả cho thẻ tín dụng, phí sử dụng thẻ (bao gồm các giao dịch).
- Nhận biết kết quả của việc trả các khoản nợ đúng thời hạn, bao gồm hồ sơ tín dụng và giá trị tín dụng.
- Vận dụng kiến thức toán học trong việc giải quyết một số vấn đề về vay nợ của các tổ chức tín dụng.

Anh Hùng muốn mua một chiếc xe ô tô với giá 500 triệu đồng theo hình thức trả góp hằng tháng, để chạy xe dịch vụ. Ngân hàng cho anh Hùng vay 500 triệu đồng trả góp hằng tháng với lãi suất năm 7,4% trong vòng 60 tháng. Hãy tính:

a) Khoản thanh toán hằng tháng của anh Hùng;
b) Tổng số tiền anh Hùng phải trả;
c) Số tiền lãi mà anh Hùng phải trả.

### 1. THẺ TÍN DỤNG VÀ PHÍ SỬ DỤNG THẺ

#### a) Thẻ tín dụng và chức năng của thẻ tín dụng

Thẻ tín dụng (credit card) là thẻ cho phép chủ thẻ thực hiện giao dịch thẻ trong phạm vi hạn mức tín dụng đã được cấp theo thỏa thuận với tổ chức phát hành thẻ.

Có thể phân loại thẻ tín dụng, dựa theo các tiêu chí sau:

- Theo hạng thẻ: hạng chuẩn, hạng vàng, hạng bạch kim.
- Theo chủ thể sử dụng: Thẻ tín dụng doanh nghiệp, thẻ tín dụng cá nhân.
- Theo phạm vi sử dụng: Thẻ nội địa, thẻ quốc tế.

Các chức năng của thẻ tín dụng:

- Thanh toán chậm: Có thể sử dụng thẻ tín dụng để chi tiêu, mua sắm,... mà không cần thanh toán ngay. Khách hàng sẽ được thanh toán chậm trong một khoảng thời gian nhất định mà không phải chịu lãi suất. Sau thời gian miễn lãi, ngân hàng sẽ tính lãi suất trên phần dư nợ dương với lãi suất cho vay.
- Rút tiền mặt: Chủ thẻ có thể sử dụng thẻ tín dụng để rút tiền mặt ngay tại các cây ATM.
- Mua sắm trả góp: Trả góp qua thẻ tín dụng là hình thức mua trả góp phổ biến hiện nay. Số tiền giao dịch sẽ được chia đều thành các khoản trả góp trong nhiều tháng.b) Phí sử dụng thẻ tín dụng

Thẻ tín dụng là phương thức thanh toán an toàn, tiện lợi. Tuy nhiên, khi sử dụng thẻ tín dụng, chủ thẻ thường phải trả một số loại phí chính như sau:

- Phí phát hành thẻ: Đây là mức phí cần trả để đăng kí làm thẻ tín dụng. Tuỳ từng ngân hàng mà mức phí phát hành thẻ cũng sẽ khác nhau hoặc được miễn phí.
- Phí thường niên: Đây là mức phí chủ thẻ cần đóng để duy trì thẻ. Mức phí này sẽ thu định kì hằng năm cho đến khi thẻ hết thời hạn hoặc chủ thẻ muốn ngừng sử dụng dịch vụ thẻ.
- Phí chậm thanh toán: Khi đến hạn thanh toán dư nợ tín dụng, nếu chủ thẻ vẫn chưa trả đủ cho ngân hàng thì không chỉ phải chịu mức lãi suất phát sinh mà còn phải chịu thêm mức phí chậm thanh toán. Mức phí này được quy định cụ thể tuỳ vào từng ngân hàng và được áp dụng trên toàn bộ dư nợ cuối kì chưa thanh toán.

Sao kê thẻ tín dụng là hoá đơn do ngân hàng gửi cho chủ thẻ vào cuối mỗi kì sao kê, trong đó liệt kê tất cả các giao dịch phát sinh và số tiền dư nợ thẻ tín dụng, thông báo thời hạn thanh toán và số tiền tối thiểu cần phải thanh toán. Các ngân hàng thường gửi bảng sao kê cho chủ thẻ trước thời hạn thanh toán ít nhất 15 ngày.

Nếu không thanh toán toàn bộ số tiền đã chi tiêu, khoản vay trả góp trong khoảng thời gian nhất định đã thoả thuận, chủ thẻ sẽ phải trả lãi cho ngân hàng. Thông thường, thời gian miễn lãi kéo dài khoảng từ 45 – 50 ngày (tuỳ từng ngân hàng). Nếu chủ thẻ trả đủ nợ trong thời gian miễn lãi thì sẽ không bị tính lãi.

Sau thời gian miễn lãi nếu không trả đủ số tiền đã tiêu, ngân hàng sẽ tính lãi suất thẻ tín dụng trên tổng số tiền đã sử dụng. Các loại lãi suất của thẻ tín dụng:

- Lãi suất chung: Đối với hoạt động mua sắm qua thẻ tín dụng, lãi suất tương đương với lãi suất vay thông thường.
- Lãi suất rút tiền mặt: Tuỳ từng ngân hàng, mức lãi suất rút tiền mặt thường dao động từ 3 – 5% số tiền giao dịch.
- Lãi suất đối ngoại tệ: Khi chuyển đổi ngoại tệ trên thẻ tín dụng quốc tế, chủ thẻ sẽ phải chịu phí chuyển đổi dao động từ 2 – 4%.

Để tránh bị tính lãi suất cao khi dùng thẻ tín dụng, người dùng cần lưu ý những điểm sau:

- Thanh toán dư nợ đúng hạn, càng sớm càng tốt: Nên thanh toán dư nợ đúng hạn để không bị tính thêm lãi. Nếu không đủ khả năng thanh toán toàn bộ, hãy cố gắng thanh toán một phần trong thời gian sớm nhất có thể.
- Chỉ rút tiền mặt khi thực sự cần thiết.
- Chi tiêu trong khả năng trả nợ.

**Ví dụ 1.** Thẻ tín dụng ngân hàng cho phép chủ thẻ sử dụng để thanh toán. Giả sử chị Hương đang sử dụng thẻ tín dụng có thời gian miễn lãi là 45 ngày, chu kì thanh toán từ 30/5 đến 30/6, hạn thanh toán là ngày 15/7, lãi suất áp dụng là 20%/năm và được tính lãi hằng ngày kể từ khi bắt đầu vay, với điều kiện số dư nợ tối thiểu cần thanh toán là 5% tổng tiền chi tiêu. Giả sử không có dư nợ đầu kì và trong tháng 6, chị Hương đã sử dụng thẻ tín dụng thực hiện các chi tiêu sau:

- Ngày 8/6 thanh toán mua hàng ở siêu thị là 5 triệu đồng;
- Ngày 15/6 thanh toán tiền hoá đơn 2 triệu đồng;- Ngày 30/6 trả ngân hàng 4 triệu đồng.

Tính tổng số tiền lãi chị Hương phải trả khi tới hạn thanh toán 15/7.

**Giải**

Ta có:

- Dư nợ 1 (từ ngày 8/6 đến ngày 14/6) là 5 triệu đồng;
- Dư nợ 2 (từ ngày 15/6 đến ngày 29/6) là 7 triệu đồng;
- Dư nợ 3 (từ ngày 1/7 đến ngày 15/7) là 3 triệu đồng.

Chị Hương đã thanh toán đủ số dư nợ tối thiểu và dư nợ tại thời điểm ngày 15/7 vẫn còn 3 triệu đồng. Do đó số tiền lãi sẽ bị tính bao gồm:

- Với Dư nợ 1, số tiền lãi là: 5 000 000 · $\frac{20\%}{356}$ · 7 ≈ 19 179 (đồng).
- Với Dư nợ 2, số tiền lãi là: 7 000 000 · $\frac{20\%}{365}$ · 15 ≈ 57 534 (đồng).
- Với Dư nợ 3, số tiền lãi là: 3 000 000 · $\frac{20\%}{365}$ · 15 ≈ 24 658 (đồng).

Vậy tổng số tiền lãi mà chị Hương cần phải thanh toán khi đến hạn 15/7 là:

$$
19\,179 + 57\,534 + 24\,658 = 101\,371
$$

Ngoài ra, số tiền 3 triệu đồng vẫn bị tính tiếp lãi cho tới thời điểm chị Hương thanh toán trả ngân hàng.

**Chú ý.** Nếu chị Hương thanh toán đủ số tiền 7 triệu trong thời hạn thanh toán (tức là không còn nợ sau ngày 15/7) thì sẽ không bị mất bất cứ khoản lãi nào.

**Luyện tập 1.** Thực hiện yêu cầu trong Ví dụ 1, nếu ngày 30/6 chị Hương chỉ trả ngân hàng 1 triệu đồng (các số liệu khác giữ nguyên).

### 2. VAY NỢ CỦA CÁC TỔ CHỨC TÍN DỤNG

#### a) Vay theo hình thức lãi đơn

Lãi đơn chủ yếu được dùng cho các khoản vay ngắn hạn (thường là dưới 1 năm).

- Nếu một khoản tiền vốn P được vay với lãi suất đơn là r mỗi năm trong thời hạn t năm, thì số tiền lãi l phải trả là:

$$
l = Prt.
$$

- Số tiền A còn nợ vào cuối năm thứ t là tổng số tiền vốn P đã vay và số tiền lãi phải trả, và bằng

$$
A = P + l = P + Prt = P(1 + rt).
$$

**Ví dụ 2.** Bác An vay một tổ chức tín dụng 50 triệu đồng trong thời hạn 6 tháng với lãi suất đơn là 10% mỗi năm. Tính số tiền lãi và tổng số tiền bác An phải trả sau 6 tháng.

**Giải**

Ở đây ta có: $P = 50$ (triệu đồng); $r = 10\% = 0,1$; $t = \frac{6}{12} = \frac{1}{2}$ (năm).

Số tiền lãi bác An phải trả là:

$$
I = Prt = 50 \cdot 0,1 \cdot \frac{1}{2} = 2,5 \text{ (triệu đồng)}.
$$

Tổng số tiền bác An phải trả là:

$$
A = P + I = 50 + 2,5 = 52,5 \text{ (triệu đồng)}.
$$

**Luyện tập 2.** Một công ty vay ngân hàng 1 tỉ đồng trong thời hạn 4 tháng với lãi suất đơn là $9\%$ một năm. Hỏi sau 4 tháng, công ty phải trả cho ngân hàng tổng số tiền cả vốn lẫn lãi là bao nhiêu?

#### b) Vay theo hình thức lãi kép

Lãi kép thường được áp dụng cho các khoản vay trung và dài hạn.

**Ví dụ 3.** Một người vay ngân hàng 100 triệu đồng theo thể thức lãi kép với lãi suất năm là $12\%$ thì tổng số tiền phải trả sau 2 năm là bao nhiêu nếu việc tính lãi diễn ra:

a) Hằng năm?

b) Hằng nửa năm?

Tính số tiền lãi phải trả trong mỗi trường hợp.

**Giải**

Ta sử dụng công thức lãi kép: $A = P\left(1 + \frac{r}{n}\right)^{nt}$.

Ta có: $P = 100$ (triệu đồng); $r = 12\% = 0,12$; $t = 2$ năm.

a) Khi tính lãi hằng năm thì số kì tính lãi trong một năm là $n = 1$. Do đó tổng số tiền phải trả là

$$
A = P(1 + r)^t = 100 \cdot (1 + 0,12)^2 \approx 125,44 \text{ (triệu đồng)}.
$$

Số tiền lãi phải trả là: $125,44 - 100 = 25,44$ (triệu đồng).

b) Khi tính lãi hằng nửa năm thì số kì tính lãi trong một năm là $n = 2$. Do đó tổng số tiền phải trả là:

$$
A = P\left(1 + \frac{r}{2}\right)^{2t} = 100 \cdot \left(1 + \frac{0,12}{2}\right)^4 \approx 126,247696 \text{ (triệu đồng)}.
$$

Số tiền lãi phải trả là: $126,247696 - 100 = 26,247696$ (triệu đồng).

**Luyện tập 4.** Trở lại Ví dụ 3, hãy tính tổng số tiền phải trả và số tiền lãi tương ứng phải trả sau 2 năm nếu việc tính lãi diễn ra:

a) Hằng quý;

b) Hằng tháng.

c) Vay trả góp

Một khoản vay với lãi suất cố định được gọi là trả góp nếu cả gốc và lãi được trả theo một chuỗi các khoản thanh toán bằng nhau được thực hiện trong các khoảng thời gian bằng nhau.Khi một khoản vay $V$ được phân bổ với lãi suất $i$ trên mỗi kì thanh toán và thực hiện trong $n$ kì thanh toán, câu hỏi thông thường là “Khoản thanh toán $P$ là bao nhiêu?”. Nói cách khác, trong bài toán trả góp, chúng ta muốn tìm khoản thanh toán $P$ mỗi kì để sao cho $n$ kì thanh toán, với lãi suất $i$ trong mỗi kì, sẽ cho chúng ta giá trị hiện tại bằng số tiền của khoản vay. Từ công thức mua trả góp ở trang 127 SGK Toán 11, tập 1 (bộ sách Kết nối tri thức với cuộc sống), ta có:

Khoản thanh toán $P$ cần thiết trong mỗi kì để trả khoản vay $V$, sau $n$ kì thanh toán với lãi suất $i$ trong mỗi kì thanh toán là

$$
P = V \cdot \frac{i}{1 - (1 + i)^{-n}}.
$$

**Ví dụ 4.** Tìm khoản thanh toán hằng tháng để trả khoản vay 100 triệu đồng ở mức lãi suất 9% mỗi năm:

a) Trong 2 năm;
b) Trong 3 năm.

Tổng số tiền phải trả cho mỗi khoản vay này là bao nhiêu?

**Giải**

Ta có: $V = 100$ (triệu đồng); $i = \frac{9\%}{12} = 0,75\% = 0,0075$.

a) Thời gian 2 năm ứng với $n = 24$ kì thanh toán. Do đó khoản thanh toán hằng tháng cho khoản vay này là:

$$
P = V \cdot \frac{i}{1 - (1 + i)^{-n}} = 100 \cdot \frac{0,0075}{1 - (1 + 0,0075)^{-24}} \approx 4,569 \text{ (triệu đồng)}.
$$

Số tiền phải trả cho khoản vay này là: $4,569 \cdot 24 = 109,656$ (triệu đồng).

b) Thời gian 3 năm ứng với $n = 36$ kì thanh toán. Do đó khoản thanh toán hằng tháng cho khoản vay này là:

$$
P = V \cdot \frac{i}{1 - (1 + i)^{-n}} = 100 \cdot \frac{0,0075}{1 - (1 + 0,0075)^{-36}} \approx 3,180 \text{ (triệu đồng)}.
$$

Số tiền phải trả cho khoản vay này là: $3,180 \cdot 36 = 114,480$ (triệu đồng).

**Chú ý.** Trong các tính toán gần đúng ở trên, ta làm tròn lên (như cách thực tế mà các ngân hàng thường sử dụng) chứ không làm tròn theo các quy tắc toán học.

**Luyện tập 5.** Vợ chồng anh Tùng mua một căn chung cư trị giá 3 tỉ đồng và đã trả trước 600 triệu đồng. Họ có thể khấu hao số dư $3 - 0,6 = 2,4$ (tỉ đồng), ở mức lãi suất $6\%$ trong vòng 30 năm.

a) Tính khoản thanh toán hằng tháng.
b) Tổng số tiền trả lãi của họ là bao nhiêu?
c) Sau 20 năm, vốn chủ sở hữu căn nhà của họ (nghĩa là tổng số tiền trả trước và số tiền trả cho khoản vay) là bao nhiêu?

**Vận dụng.** Giải quyết bài toán trong Tình huống mở đầu.

### BÀI TẬP

3.7. Thẻ tín dụng ngân hàng còn cho phép chủ thẻ sử dụng để rút tiền mặt từ máy ATM. Giả sử vào ngày 1/6, chị Hương rút tiền tại máy ATM bằng thẻ tín dụng với số tiền là 5 triệu đồng và chu kì thanh toán là từ ngày 1/6 đến ngày 15/7 với mức lãi suất là 20%/năm và phí rút tiền mặt là 3%. Đến ngày 20/7, chị Hương mới thanh toán khoản rút 5 triệu đó cho ngân hàng.

a) Tính tổng chi phí mà chị Hương phải trả khi rút 5 triệu đồng tiền mặt tại thẻ ATM.
b) Nếu coi việc rút tiền mặt từ máy ATM là một khoản vay với lãi suất đơn. Hãy tính lãi suất năm của khoản vay này.

3.8. Một cửa hàng tiện lợi tính phí 1,25% mỗi tháng trên số dư chưa thanh toán cho khách hàng có tài khoản thanh toán (tiền lãi được tính gộp hằng tháng). Một khách hàng mua hàng hết 5 triệu đồng và không thanh toán hoá đơn trong 6 tháng. Hoá đơn lúc đó sẽ là bao nhiêu tiền?

3.9. Chị Dung vay một tổ chức tín dụng 100 triệu đồng trong thời hạn 6 tháng với lãi suất 9%/ năm. Tính tổng số tiền và số tiền lãi chị Dung phải trả khi việc tính lãi diễn ra theo thể thức:

a) Lãi đơn;
b) Lãi kép hằng tháng.

3.10. Giả sử anh Hải cần vay ngân hàng 500 triệu đồng ngay bây giờ và có thể trả khoản vay này sau 9 tháng. Để trả lãi ngân hàng ít hơn, anh Hải nên chọn loại khoản vay nào: khoản vay lãi kép kì hạn 3 tháng với lãi suất 8% một năm hay khoản vay lãi đơn 8,5% một năm?

3.11. Anh Tùng vừa mua một căn hộ chung cư và còn nợ người bán 800 triệu đồng. Anh Tùng hứa sẽ trả cho người bán số tiền 800 triệu đồng này và tất cả số tiền lãi trong vòng 5 năm kể từ bây giờ. Người bán đưa ra hai sự lựa chọn lãi suất năm đối với khoản vay của anh Tùng như sau:

a) Lãi suất 6%, tính lãi đơn hằng năm;
b) Lãi suất 5,5%, tính lãi kép hằng tháng.

Hỏi lựa chọn nào là tốt hơn cho anh Tùng, nghĩa là khoản vay nào dẫn đến số tiền lãi phải trả là ít hơn?

3.12. Lãi suất cho vay mua ô tô trả góp trong 72 tháng của một ngân hàng là 6,9% một năm, trả góp hằng tháng. Giả sử chị Dung muốn mua một chiếc ô tô mới với giá 600 triệu đồng theo hình thức trả góp này của ngân hàng.

a) Khoản thanh toán hằng tháng của chị Dung là bao nhiêu?
b) Tổng số tiền chị Dung phải trả là bao nhiêu?
c) Số tiền lãi chị Dung phải trả là bao nhiêu?

## Bài 7 ĐẦU TƯ TÀI CHÍNH. LẬP KẾ HOẠCH TÀI CHÍNH CÁ NHÂN

**THUẬT NGỮ**

- Đầu tư
- Niên kim
- Số tiền của niên kim
- Giá trị hiện tại của niên kim

**KIẾN THỨC, KĨ NĂNG**

- Thiết lập kế hoạch tài chính cá nhân cho các nhu cầu dài hạn như giáo dục hoặc sống tự lập.
- Vận dụng kiến thức toán học trong việc giải quyết một số vấn đề về đầu tư.

Anh Nam trúng giải xổ số độc đắc trị giá 5 tỉ đồng, và số tiền trúng thưởng này sẽ được trả dần 500 triệu mỗi năm trong vòng 10 năm. Tính giá trị hiện tại của số tiền trúng thưởng nếu anh Nam có thể tìm được một hình thức đầu tư với lãi suất kép 10% mỗi năm.

### 1. MỘT SỐ VẤN ĐỀ VỀ ĐẦU TƯ

Trong tài chính, đầu tư là một hoạt động sử dụng những nguồn lực ở hiện tại (gọi chung là vốn) như tiền bạc, vật chất, nhân công, trí tuệ, thời gian,... để đạt được lợi nhuận và lợi ích kinh tế lớn hơn trong tương lai so với nguồn lực đã bỏ ra.

Bất kì hình thức đầu tư sinh lợi nhuận nào cũng luôn đi cùng với rủi ro. Song mức độ rủi ro cao hay thấp, lợi nhuận ít hay nhiều sẽ phụ thuộc vào loại hình đầu tư lựa chọn.

Những kênh đầu tư phổ biến bao gồm:

- Gửi tiết kiệm ngân hàng: Là hình thức đầu tư phổ biến, phù hợp với những người tiết kiệm để chi tiêu trong ngắn hạn và trung hạn.
- Tích trữ vàng và ngoại tệ: Mua vàng và ngoại tệ để tích trữ, đến khi nào thấy giá thị trường cao thì bán ra để lấy lãi. Hình thức đầu tư này cũng có những rủi ro như mất cắp, hụt giá.
- Đầu tư bất động sản: Đây là hình thức đầu tư có khả năng sinh lời cao, tuy nhiên cần số vốn đầu tư lớn, kinh nghiệm và thời gian “theo đuổi” trong dài hạn.
- Đầu tư chứng khoán: Đây là kênh đầu tư có tính thanh khoản cao, không đòi hỏi vốn lớn, nhưng đòi hỏi phải có thời gian và kiến thức chuyên môn nhất định, đặc biệt là sự nhạy bén trước khi quyết định đầu tư.

Hiện nay, bên cạnh hình thức tự đầu tư, hình thức đầu tư qua các quỹ đầu tư chuyên nghiệp cũng là xu hướng được nhiều nhà đầu tư cá nhân lựa chọn. Theo đó, tiền đầu tư của nhà đầu tư được gộp chung với các nhà đầu tư khác và được quản lí bởi những chuyên gia tài chính chuyên nghiệp. Các chuyên gia sẽ thay mặt nhà đầu tư để mua – bán và kiểm soát tính rủi ro của các khoản đầu tư.

### 2. GIẢI QUYẾT MỘT SỐ VẤN ĐỀ VỀ ĐẦU TƯ

Hình thức lãi kép thường được áp dụng cho các khoản đầu tư trong khoảng thời gian trung hoặc dài hạn. Những vấn đề cần chú ý khi đầu tư là: xác định lãi suất đầu tư, xác định thời gian đầu tư và xác định số tiền hiện tại cần đầu tư để nhận được số tiền mong muốn sau một khoảng thời gian đầu tư nhất định.

#### a) Xác định lãi suất của một khoản đầu tư

Để tìm lãi suất hằng năm $r$ cần thiết để từ khoản tiền vốn ban đầu $P$ ta nhận được số tiền $A$ theo hình thức lãi kép theo định kì với $n$ kì trong một năm, sau $N$ kì hạn, ta cần tìm $r$ từ hệ thức sau

Từ hệ thức này ta suy ra $1 + \frac{r}{n} = \sqrt[n]{\frac{A}{P}}$ hay

$$
A = P \left(1 + \frac{r}{n}\right)^N.
$$

$$
r = n \left(\sqrt[n]{\frac{A}{P}} - 1\right).
$$

**Ví dụ 1.** Lãi suất năm của khoản đầu tư theo thể thức lãi kép và được tính lãi hằng năm phải là bao nhiêu, nếu bạn muốn tăng gấp đôi khoản đầu tư của mình trong vòng 5 năm?

**Giải**

Gọi $P$ là số tiền vốn ban đầu. Ta có: $A = 2P$; $n = 1$; $N = 5$.

Do đó để tăng gấp đôi khoản đầu tư trong vòng 5 năm thì lãi suất năm của khoản đầu tư phải là

$$
r = n \left(\sqrt[n]{\frac{A}{P}} - 1\right) = 1 - \left(\sqrt[n]{\frac{2P}{P}} - 1\right) = \sqrt[n]{2} - 1 \approx 0,149 = 14,9\%.
$$

**Luyện tập 1.** Lãi suất năm của khoản đầu tư theo thể thức lãi kép và được tính lãi hằng quý phải là bao nhiêu, nếu bạn muốn tăng gấp đôi khoản đầu tư của mình trong vòng 5 năm?

#### b) Xác định thời gian cho một khoản đầu tư

Để tính số kì gửi $N$ cần thiết cho một khoản đầu tư theo thể thức lãi kép theo định kì với số tiền vốn $P$, lãi suất năm $r$, $n$ kì tính lãi trong một năm để đạt được số tiền mong muốn $A$, ta cần tìm $N$ từ hệ thức sau

$$
A = P \left(1 + \frac{r}{n}\right)^N \text{ hay } \left(1 + \frac{r}{n}\right)^N = \frac{A}{P}.
$$

Lấy logarit cơ số $\left(1 + \frac{r}{n}\right)$ cả hai về, ta được

$$
N = \log_{1 + \frac{r}{n}} \frac{A}{P}.
$$

Vì về phải có thể không nguyên, nên thực tế ta sẽ phải chọn $N$ là số tự nhiên nhỏ nhất lớn hơn hay bằng về phải.

**Ví dụ 2.** Sẽ mất bao lâu để một khoản đầu tư tăng gấp đôi giá trị nếu nó được tính theo thể thức lãi kép theo định kì và tính lãi hằng năm, với lãi suất 10% mỗi năm?

**Giải**

Gọi $P$ là số tiền vốn ban đầu. Ta có: $A = 2P; n = 1; r = 10\% = 0,1$.

Khi đầu tư theo thể thức lãi kép theo định kì và tính lãi hằng năm với lãi suất 10% mỗi năm, thì thời gian đầu tư cần thiết là:

$$
N = \log_{10} \frac{A}{P} = \log_{10} 2 \approx 7,27.
$$

Vì $N$ phải là số tự nhiên nên ta chọn $N = 8$. Vậy sau 8 năm thì khoản đầu tư đó sẽ tăng gấp đôi giá trị.

**Luyện tập 2.** Thực hiện yêu cầu như trong Ví dụ 2, nếu đầu tư theo thể thức lãi kép theo định kì và tính lãi hằng tháng, với lãi suất 10% mỗi năm.

**Ví dụ 3.** Bác An gửi tiết kiệm 100 triệu đồng theo thể thức lãi kép kì hạn 6 tháng với lãi suất không đổi 8% một năm. Hỏi:

a) Lãi suất đơn hằng năm của khoản gửi tiết kiệm này là bao nhiêu?

b) Sau bao lâu gửi tiết kiệm, bác An nhận được số tiền ít nhất là 150 triệu đồng?

**Giải**

a) Số tiền bác An nhận được sau 1 năm gửi tiết kiệm là:

$$
A = P \left(1 + \frac{r}{2}\right)^2 = 100 \cdot \left(1 + \frac{0,08}{2}\right)^2 = 108,16 \text{ (triệu đồng)}.
$$

Số tiền lãi là $I = A - P = 108,16 - 100 = 8,16$ (triệu đồng).

Vậy lãi suất đơn hằng năm của khoản gửi tiết kiệm này là

$$
\frac{8,16}{100} = 0,0816 = 8,16\%.
$$

b) Gọi $N$ là số kì hạn gửi tiết kiệm cần thiết, ta có:

$$
A = 100 \left(1 + \frac{0,08}{2}\right)^N = 100 \cdot (1,04)^N \geq 150 \Leftrightarrow N \geq \log_{10} \frac{150}{100} \approx 10,34.
$$

Vì $N$ là phải số tự nhiên nên ta có $N = 11$.

Vậy sau 11 kì gửi tiết kiệm, tức là sau 5 năm 6 tháng, bác An sẽ nhận được số tiền ít nhất là 150 triệu đồng.

**Luyện tập 3.** Vào ngày 1 tháng 1 năm 2020, bác An gửi 200 triệu đồng vào một Tài khoản Hưu trí cá nhân được trả lãi kép kì hạn 12 tháng với lãi suất 5% mỗi năm.

a) Tài khoản này sẽ có giá trị bằng bao nhiêu vào ngày 1 tháng 1 năm 2030?
b) Lãi suất đơn hằng năm của khoản gửi này là bao nhiêu?

#### c) Xác định giá trị hiện tại của một khoản tiền

Khi nói đến “giá trị thời gian của tiền”, ta thường đề cập đến giá trị hiện tại của tiền. Giá trị hiện tại của số tiền A sẽ nhận được vào một ngày nào đó trong tương lai là số tiền vốn P mà bạn cần đầu tư ngay bây giờ để nó sẽ tăng lên thành số tiền A trong khoảng thời gian được chỉ định.

**HĐ1.** Xây dựng công thức tính giá trị hiện tại của một khoản tiền

Sử dụng công thức lãi kép, hãy tính số tiền vốn P phải gửi theo thể thức lãi kép theo định kì với lãi suất năm r và n kì tính lãi trong một năm để sau t năm gửi sẽ nhận được số tiền mong muốn là A.

**Công thức giá trị hiện tại**

> **Giá trị hiện tại** P của khoản tiền A sẽ nhận được sau t năm, khi gửi theo thể thức lãi kép theo định kì với n kì tính lãi trong một năm và lãi suất hằng năm r, được tính như sau:
> $$P = A \left(1 + \frac{r}{n}\right)^{-nt}. $$

**Chú ý.** Giá trị hiện tại của số tiền nhận được trong tương lai luôn nhỏ hơn số tiền sẽ nhận được, vì số tiền nhận được sẽ bằng giá trị hiện tại (tiền đầu tư ngay bây giờ) cộng với tiền lãi tích luỹ được trong khoảng thời gian đó.

**Ví dụ 4.** Cần đầu tư bao nhiêu tiền bây giờ ở mức lãi suất 6% mỗi năm để sau hai năm nhận được số tiền là 100 triệu đồng, khi việc tính lãi kép được thực hiện:

a) Hằng năm?
b) Hằng tháng?
c) Hằng ngày?

**Giải**

Ta có: $A = 100$ (triệu đồng); $r = 6\% = 0,06$; $t = 2$ (năm).

a) Khi việc tính lãi kép được thực hiện hằng năm ($n = 1$) thì số tiền cần đầu tư là
$$
P = A \left(1 + \frac{r}{n}\right)^{-nt} = 100 \cdot (1 + 0,06)^{-2} \approx 89 \text{ (triệu đồng)}.
$$

b) Khi việc tính lãi kép được thực hiện hằng tháng ($n = 12$) thì số tiền cần đầu tư là
$$
P = A \left(1 + \frac{r}{n}\right)^{-nt} = 100 \cdot \left(1 + \frac{0,06}{12}\right)^{-24} \approx 88,719 \text{ (triệu đồng)}.
$$

c) Khi việc tính lãi kép được thực hiện hằng ngày ($n = 365$) thì số tiền cần đầu tư là
$$
P = A \left(1 + \frac{r}{n}\right)^{-nt} = 100 \cdot \left(1 + \frac{0,06}{365}\right)^{-730} \approx 88,693 \text{ (triệu đồng)}.
$$64

**Luyện tập 4.** Một trái phiếu không có phiếu giảm giá có thể được mua lại trong 10 năm tới với giá 100 triệu đồng. Ngay bây giờ, bạn cần bỏ ra bao nhiêu tiền để mua nó nếu bạn muốn nhận lãi kép 6% một năm, tính lãi hằng tháng?

### 3. LẬP KẾ HOẠCH TÀI CHÍNH CÁ NHÂN

Trong môn Giáo dục kinh tế và pháp luật ở lớp 10, các em đã được học những kiến thức cơ bản về Lập kế hoạch tài chính cá nhân, bao gồm: khái niệm kế hoạch tài chính cá nhân; các loại tài chính kế hoạch cá nhân (ngắn hạn, trung hạn, dài hạn); tầm quan trọng của việc lập kế hoạch tài chính cá nhân và các bước lập kế hoạch tài chính cá nhân.

Việc lập và thực hiện kế hoạch tài chính cá nhân tốt sẽ giúp chúng ta chủ động cân đối được giữa thu nhập và chi tiêu, tiết kiệm: dành được những khoản chi phí cần thiết cho đời sống, học tập; chủ động nắm chắc tình hình tài chính của bản thân để điều chỉnh cho phù hợp; chi tiêu tài chính hợp lí, lành mạnh, không lãng phí, không bị thâm hụt hay nợ nần; hơn nữa, còn tiết kiệm để thực hiện các mục tiêu tài chính quan trọng trong tương lai và giúp tự chủ cuộc sống.

Để lập được kế hoạch tài chính cá nhân và thực hiện thành công kế hoạch này, cần thực hiện các bước cơ bản sau:

- Bước 1: Xác định mục tiêu tài chính và thời hạn thực hiện;
- Bước 2: Theo dõi và kiểm soát thu chi cá nhân;
- Bước 3: Thiết lập quy tắc thu chi cá nhân;
- Bước 4: Tuân thủ kế hoạch tài chính cá nhân.

**Ví dụ 5.** Bạn Quỳnh học ở một trường trung học phổ thông xa nhà và phải ở trọ gần trường. Mỗi tháng bố mẹ cho bạn ấy tổng cộng 5 triệu đồng để trang trải các chi phí học tập và sinh hoạt. Em hãy thử lập một kế hoạch tài chính cá nhân để giúp bạn Quỳnh có thể cân đối các khoản chi tiêu trong tháng.

**Giải**

Ta lập kế hoạch cá nhân theo các bước đã nói ở trên:

- Bước 1: Xác định mục tiêu tài chính và thời hạn thực hiện.

Ở đây, bạn Quỳnh cần cân đối được số tiền có hằng tháng và các khoản chi tiêu hằng tháng, để có kế hoạch chi tiêu hợp lí, lành mạnh, không lãng phí, tránh thâm hụt và nợ nần. Thời gian thực hiện kế hoạch của bạn là trong suốt 3 năm học trung học phổ thông.

- Bước 2: Theo dõi và kiểm soát thu chi cá nhân.

Bạn Quỳnh cần xác định rõ các nguồn thu và các khoản chi hằng tháng, xác định rõ khoản chi nào là thiết yếu, khoản chi nào có thể tiết kiệm. Cụ thể:

- Các nguồn thu:

    + Tiền được bố mẹ cho hằng tháng: 5 triệu đồng = 5 000 nghìn đồng.
    + Ngoài ra, bạn Quỳnh có thể có một số nguồn thu (không thường xuyên) khác như: tiền thưởng nếu được học sinh giỏi ở cuối kì, tiền giúp việc cho bác chủ nhà trọ khi rảnh rỗi,...

- Các khoản chi:

    + Đóng học phí: 300 nghìn đồng/tháng.
    + Tiền thuê nhà, chi phí điện, nước, cước điện thoại, internet (ở chung với bạn): khoảng 1 100 nghìn đồng/tháng;+ Tiền ăn uống hằng tháng: khoảng 80 nghìn đồng/ngày x 30 ngày = 2 400 nghìn đồng;
    + Tiền mua các vật dụng thiết yếu, tài liệu, dụng cụ học tập: Khoảng 200 nghìn đồng/tháng;
    + Tiền tiêu vặt, tiền phục vụ nhu cầu giải trí cá nhân (xem phim, mua sách, truyện, ...), đi sinh nhật bạn, đóng quỹ lớp,... đây là những khoản chi phát sinh.

- Bước 3: Thiết lập quy tắc thu chi cá nhân

Để có thể cân đối được các khoản thu – chi và có tiền tiết kiệm, để phòng những trường hợp đột xuất, bạn Quỳnh có thể áp dụng quy tắc: 80/10/10, ở đó:

+ Các khoản chi thiết yếu (học phí, tiền ăn, tiền thuê nhà, tiền điện, nước, ...): chiếm 80% nguồn thu;
+ Các khoản chi phát sinh (sinh nhật, đóng quỹ lớp, giải trí, ...): chiếm 10% nguồn thu;
+ Tiền tiết kiệm: chiếm 10% nguồn thu.

- Bước 4: Tuân thủ kế hoạch tài chính cá nhân.

Để thực hiện thành công kế hoạch tài chính cá nhân đã lập, bạn Quỳnh cần kiên trì tuân thủ theo đúng kế hoạch đã đề ra. Nếu có khoản chi đột xuất ngoài dự kiến thì phải cắt giảm các khoản chi không thật cần thiết để tránh bị thâm hụt hay nợ nần, và có thể thu xếp thời gian rảnh giúp việc cho bác chủ nhà nhằm tăng thêm khoản thu không thường xuyên để bù lại. Nếu nhu cầu thực tế có thay đổi thì lại cập nhật và điều chỉnh bản kế hoạch cho phù hợp.

Khi lập kế hoạch tài chính cá nhân cho các nhu cầu dài hạn như giáo dục hoặc sống tự lập, bên cạnh việc quản lí tài chính cá nhân thông qua việc phân bổ cân đối nguồn tài chính cá nhân cho các nhu cầu hiện tại, một vấn đề quan trọng là cần có kế hoạch để tích luỹ được số tiền cần thiết thông qua gửi tiết kiệm tích luỹ hoặc đầu tư.

Ta nhắc lại một số kiến thức về niên kim trong SGK Toán 11, tập 1 (bộ sách Kết nối tri thức với cuộc sống):

- Niên kim là một dãy các khoản tiền bằng nhau được gửi định kì. Các khoản tiền gửi định kì có thể là hằng năm, nửa năm, hằng quý, hằng tháng hoặc bất kì khoảng thời gian cố định nào khác. Ví dụ về niên kim là tiền gửi thường xuyên vào tài khoản tiết kiệm tích luỹ, tiền thanh toán hằng tháng khi vay mua nhà trả góp, tiền thanh toán định kì khi mua bảo hiểm nhân thọ,...

- Số tiền của niên kim là tổng của tất cả các khoản tiền gửi được thực hiện và tất cả các khoản tiền lãi tích lũy.

Giả sử $P$ là khoản tiền gửi được thực hiện vào cuối mỗi kì thanh toán cho một niên kim trả lãi suất $i$ trong mỗi kì thanh toán. Số tiền $A$ của niên kim sau $n$ lần gửi tiền là

$$
A = P \cdot \frac{(1 + i)^n - 1}{i}.
$$

- Giá trị hiện tại của niên kim là tổng các giá trị hiện tại của các khoản rút.

Giả sử một niên kim có lãi suất $i$ trong mỗi kì thanh toán. Nếu mỗi kì thanh toán rút $P$ đồng và được thực hiện trong $n$ kì, thì giá trị hiện tại $V$ của niên kim là

$$
V = P \cdot \frac{1 - (1 + i)^{-n}}{i}.
$$

**Nhận xét.** Để thực hiện những dự định lớn trong tương lai như tiết kiệm tiền để học đại học, mua nhà, mua xe, đi du lịch, hay tiết kiệm tiền chuẩn bị cho khi nghỉ hưu,... chúng ta cần lập kế hoạch để tích lũy được số tiền cần thiết. Ta có thể sử dụng công thức tính niên kim hoặc các hệ thức truy hồi để tính số tiền mà ta sẽ tích lũy được sau một khoảng thời gian hoặc ước lượng khoảng thời gian cần thiết để tích lũy đủ số tiền cần thiết, nếu mỗi kì gửi ta có thể gửi đều đặn một số tiền cố định nào đó.

**Ví dụ 6.** Để tiết kiệm tiền cho việc học đại học sau này của con gái, cô Lan quyết định gửi 1 triệu đồng mỗi tháng vào một tài khoản tích lũy được ngân hàng đảm bảo lãi suất và trả lãi kép 0,5% hằng tháng. Cô bắt đầu chương trình tiết kiệm này khi con gái có tròn 3 tuổi. Cô Lan sẽ tiết kiệm được bao nhiêu tiền vào thời điểm gửi khoản tiền lần thứ 180? Lúc này con gái cô bao nhiêu tuổi?

**Giải**

Ta sử dụng công thức tính số tiền của một niên kim. Ta có:

$$
P = 1 \text{ (triệu đồng)}; \quad i = 0,5\% = 0,005; \quad n = 180.
$$

Số tiền mà cô Lan tích lũy được khi gửi khoản tiền lần thứ 180 là

$$
A = P \cdot \frac{(1 + i)^n - 1}{i} = 1 \cdot \frac{(1 + 0,005)^{180} - 1}{0,005} \approx 290,819 \text{ (triệu đồng)}.
$$

Mỗi năm có 12 kì gửi tiền, nên thời gian để gửi khoản tiền lần thứ 180 là 180 : 12 = 15 (năm). Vì cô Lan bắt đầu gửi tiết kiệm tích lũy khi con gái có được 3 tuổi, nên khi cô gửi khoản tiền lần thứ 180 thì con gái có 18 tuổi.

**Luyện tập 5.** Để tiết kiệm tiền cho việc nghỉ hưu, anh Nam 35 tuổi, quyết định gửi 36 triệu đồng mỗi năm vào Tài khoản Hưu trí Cá nhân trong vòng 30 năm tới. Giá trị của tài khoản sẽ là bao nhiêu khi anh Nam gửi tiền lần thứ 30? Giá sử lãi suất của tài khoản là 6% mỗi năm, được tính lãi kép hằng năm.

**Ví dụ 7.** Chị Hương cần 5 triệu đồng mỗi tháng trong 10 tháng tiếp theo để trang trải các chi phí sinh hoạt trong 1 năm khi học ở trường đại học. Nếu một quỹ thị trường tiền tệ trả lãi kép 0,75% hằng tháng thì bây giờ chị Hương phải xin bố mẹ bao nhiêu tiền gửi vào quỹ đó, để có thể rút ra 5 triệu đồng mỗi tháng trong 10 tháng tiếp theo?

**Giải**

Ta có: $P = 5 \text{ (triệu đồng)}; \quad n = 10; \quad i = 0,75\% = 0,0075.$

Số tiền chị Hương cần gửi vào quỹ thị trường tiền tệ tại thời điểm bây giờ là

$$
V = P \cdot \frac{1 - (1 + i)^{-n}}{i} = 5 \cdot \frac{1 - (1 + 0,0075)^{-10}}{0,0075} \approx 47,998 \text{ (triệu đồng)}.
$$

**Luyện tập 6.** Giải quyết bài toán ở Tình huống mở đầu.67

**Ví dụ 8.** Mất bao lâu để tiết kiệm được 200 triệu đồng nếu mỗi tháng bạn gửi 5 triệu đồng vào một tài khoản tiết kiệm tích luỹ được tính lãi kép hằng tháng, với lãi suất năm là 6%?

**Giải**

Ta có: $A = 200$ (triệu đồng); $P = 5$ (triệu đồng); $i = \frac{6\%}{12} = 0,5\% = 0,005$.

Từ công thức $A = P \cdot \frac{(1 + i)^n - 1}{i}$ suy ra $(1 + i)^n = \frac{A \cdot i}{P} + 1$, tức là $n = \log_{1 + i} \left( \frac{A \cdot i}{P} + 1 \right)$.

Do đó số kí gửi cần thiết sẽ là

$$
n = \log_{1 + i} \left( \frac{A \cdot i}{P} + 1 \right) = \log_{1,005} \left( \frac{200 \cdot 0,005}{5} + 1 \right) = \log_{1,005} 1,2 \approx 36,6.
$$

Vậy số kí cần gửi là 37 kí, tức là sau 3 năm 1 tháng.

**Ví dụ 9.** Một chuyến đi trải nghiệm thực tế trong kì nghỉ hè sẽ tiêu tốn 4,5 triệu đồng và sẽ phải nộp vào ngày 2/7, trước chuyến đi. Để tiết kiệm tiền cho chuyến đi, vào ngày 1/1 cùng năm, bạn Nam gửi 1 triệu đồng vào một tài khoản tiết kiệm được trả lãi 6% mỗi năm và tính lãi hằng tháng. Bắt đầu từ ngày 1/2, vào ngày đầu tiên của mỗi tháng, bạn Nam gửi đều đặn số tiền 500 nghìn đồng vào tài khoản này.

a) Tìm hệ thức truy hồi biểu thị số tiền trong tài khoản sau $n$ tháng.

b) Tính lần lượt số tiền có trong tài khoản trong 6 tháng đầu tiên (kết quả tính bằng triệu đồng và làm tròn đến chữ số thập phân thứ ba).

c) Sau khi khoản tiền gửi vào ngày 1/7 được thực hiện, tài khoản của bạn Nam có đủ tiền để thanh toán cho chuyến đi trải nghiệm thực tế không?

d) Nếu bạn Nam gửi 600 nghìn đồng mỗi tháng, kể từ ngày 1/2, thì tài khoản của bạn ấy có đủ tiền cho chuyến đi không?

**Giải**

a) Gọi $A_n$ là số tiền (triệu đồng) trong tài khoản của bạn Nam sau $n$ tháng, kể từ ngày 1/1. Ta có hệ thức truy hồi:

$$
A_0 = 1; A_n = \left(1 + \frac{0,06}{12}\right) A_{n-1} + 0,5 = 1,005 A_{n-1} + 0,5 \ (n \geq 1).
$$

b) Ta có:

$A_0 = 1$ (triệu đồng);

$A_1 = 1,005 A_0 + 0,5 = 1,005 \cdot 1 + 0,5 = 1,505$ (triệu đồng);

$A_2 = 1,005 A_1 + 0,5 = 1,005 \cdot 1,505 + 0,5 \approx 2,013$ (triệu đồng);

$A_3 = 1,005 A_2 + 0,5 = 1,005 \cdot 2,013 + 0,5 \approx 2,523$ (triệu đồng);

$A_4 = 1,005 A_3 + 0,5 = 1,005 \cdot 2,523 + 0,5 \approx 3,035$ (triệu đồng);

$A_5 = 1,005 A_4 + 0,5 = 1,005 \cdot 3,035 + 0,5 \approx 3,550$ (triệu đồng).

c) Số tiền trong tài khoản của bạn Nam sau khoản tiền gửi vào ngày 1/7 là

$$
A_0 = 1,005 A_5 + 0,5 = 1,005 \cdot 3,550 + 0,5 \approx 4,068 \text{ (triệu đồng)}.
$$

Như vậy, tài khoản của bạn Nam sẽ không đủ tiền để thanh toán cho chuyến đi trải nghiệm thực tế.

d) Nếu bạn Nam gửi 600 nghìn đồng mỗi tháng, kể từ ngày 1/2, thì hệ thức truy hồi biểu thị số tài khoản của bạn Nam sau $n$ tháng là

$$
A_0 = 1; A_n = \left(1 + \frac{0,06}{12}\right) A_{n-1} + 0,6 = 1,005 A_{n-1} + 0,6 \ (n \geq 1).
$$

Trong trường hợp này, tính lần lượt tương tự phần b, ta được $A_0 \approx 4,676$ (triệu đồng).

Vậy trong trường hợp này, tài khoản của bạn Nam đủ thanh toán cho chuyến đi.

**Chú ý.** Có thể sử dụng bảng tính Excel hoặc máy tính cầm tay để tính lần lượt các số hạng của một dãy số cho bảng hệ thức truy hồi. Xem chi tiết trong phần **Em có biết?** ở cuối bài học này.

**Luyện tập 7.** Ngày 1/1/2021, bác Hùng quyết định gửi 6 triệu đồng vào cuối mỗi quý vào một Tài khoản Hưu trí Cá nhân.

a) Tìm hệ thức truy hồi biểu thị số dư tài khoản của bác Hùng vào cuối mỗi quý nếu lãi suất được giả định là 8% mỗi năm và được tính lãi hằng quý.

b) Sẽ mất bao lâu trước khi giá trị của tài khoản vượt quá 500 triệu đồng?

c) Giá trị của tài khoản sẽ là bao nhiêu sau 25 năm nữa, khi bác Hùng nghỉ hưu?

### BÀI TẬP

3.13. Một trái phiếu không có phiếu giảm giá có thể được mua lại trong 5 năm tới với giá 100 triệu đồng. Ngay bây giờ, bạn cần bỏ ra bao nhiêu tiền để mua nó nếu bạn muốn nhận 1% lãi kép hằng tháng?

3.14. Anh Hưng đầu tư 50 triệu đồng mỗi năm vào một quỹ đầu tư trong vòng 15 năm. Nếu giá trị thị trường của quỹ tăng 5% mỗi năm, thì giá trị tài khoản của anh Hưng sau 15 lần gửi tiền sẽ là bao nhiêu?

3.15. Sẽ mất bao nhiêu năm để tiết kiệm được 100 triệu đồng nếu mỗi tháng bạn gửi 1 triệu đồng vào một tài khoản tích luỹ với lãi suất 6% một năm và được tính lãi kép hằng tháng?

3.16. Tìm giá trị hiện tại của một niên kim mà khoản tiền rút sẽ là 5 triệu đồng mỗi tháng trong vòng 48 tháng với lãi suất năm là 6%.

3.17. Anh Dương đi làm thêm trong mùa hè để kiếm tiền giúp trang trải chi phí học tập ở trường đại học vào năm sau. Anh Dương có thể tiết kiệm được 1,5 triệu đồng mỗi tuần trong 12 tuần và anh đầu tư nó với lãi kép 0,4% hằng tuần.

a) Anh Dương có tổng cộng bao nhiêu tiền sau 12 tuần?

b) Khi năm học mới bắt đầu, anh Dương sẽ bắt đầu rút số tiền bằng nhau từ tài khoản này mỗi tuần. Số tiền anh Dương có thể rút nhiều nhất mỗi tuần trong vòng 36 tuần là bao nhiêu?

3.18. Anh Nam và chị Hương cần có 2 tỉ đồng để mua một căn nhà sau 4 năm nữa. Hỏi bây giờ họ cần gửi bao nhiêu tiền vào tài khoản tiết kiệm để có thể thực hiện việc này, biết rằng ngân hàng trả lãi kép 2% hằng quý?69

### Em có biết?

Tính các số hạng của một dãy số cho bởi hệ thức truy hồi bằng máy tính cầm tay hoặc phần mềm bảng tính Excel.

- Ta có thể sử dụng máy tính cầm tay để tính lần lượt các số hạng của dãy số truy hồi.

Quay lại Ví dụ 9, ta có dãy số truy hồi với: $A_0 = 1$; $A_n = 1,005A_{n-1} + 0,5(n \geq 1)$.

Để tìm các số hạng của dãy số trên, ta nhập vào máy tính biểu thức:

$$
x = x + 1: A = 1,005A + 0,5
$$

bằng cách bấm tổ hợp phím sau:

`ALPHA` `)` `ALPHA` `CALC` `ALPHA` `)` `+` `1` `ALPHA` $\boxed{\int^{\square}_{\square} \blacksquare}$ `ALPHA` `CALC` `1` `.` `0` `0` `5` `ALPHA` `(-)` `+` `0` `.` `5`

ở đó, $x$ tương ứng với chỉ số của các số hạng trong dãy (chính là $n$), $A$ là giá trị của số hạng $A_n$ (hay chính là $A_x$).

Khi đó, màn hình hiển thị:

$$
x = x + 1: A = 1.005A + 0.5
$$

Ta tiếp tục bấm phím [CALC] và lần lượt nhập các giá trị $x = 0$, $A = 1$, sau đó bấm phím [=].

màn hình hiển thị:

Tức là $A_1 = 1,505$. Tiếp tục bấm phím [C=] liên tục, ta thu được $A_2 \approx 2,013$; $A_3 \approx 2,523$...

Vậy để tìm số hạng thứ $n$, ta bấm phím [C=] cho tới khi $x$ dừng lại ở giá trị $n$, khi đó ta tìm được giá trị $A_n$.

- Bên cạnh việc sử dụng máy tính cầm tay để tính lần lượt các số hạng của dãy số truy hồi, ta có thể sử dụng bảng tính Excel để tính số hạng này như hình bên.

Mở bảng tính Excel, ta lập ra hai cột, một cột là chỉ số $n$, một cột là giá trị của số hạng thứ $n$. Ta nhập giá trị đầu tiên của chỉ số $n$ là 0, sau đó đặt con trỏ chuột ở góc dưới bên phải của ô số 0, bấm phím Ctrl, ta thấy xuất hiện biểu tượng dấu cộng và kéo chuột xuống, ta được một dãy số theo thứ tự như hình bên.

Tiếp tục, ta nhập giá trị đầu tiên của dãy số $A_0 = 1$, ở ô B2. Tại ô B3, ta nhập $=1.005*\$B2+0.5$ (tức là ta lấy 1,005 nhân với kết quả ở ô B2 rồi cộng với 0,5) và nhấn Enter, ta thu được kết quả $A_1 = 1,505$.

Ta tiếp tục đặt con trỏ chuột ở góc dưới bên phải của ô B3, bấm phím Ctrl, ta thấy xuất hiện biểu tượng dấu cộng và kéo chuột xuống, ta được các số hạng cần tìm.

Tức là $A_2 \approx 2,013$; $A_3 \approx 2,523$...

|  Chỉ số n | Số hạng thứ n  |
| --- | --- |
|  0 | 1  |
|  1 | 1.505  |
|  2 |   |
|  3 |   |
|  4 |   |
|  5 |   |
|  6 |   |
|  7 |   |

|   | A | B  |
| --- | --- | --- |
|  1 | Chỉ số n | Số hạng thứ n  |
|  2 | 0 | 1  |
|  3 | 1 | 1.505  |
|  4 | 2 | 2.012525  |
|  5 | 3 | 2.522587625  |
|  6 | 4 | 3.035200563  |
|  7 | 5 | 3.550376566  |
|  8 | 6 | 4.068128449  |
|  9 | 7 | 4.588469091  |

## BÀI TẬP CUỐI CHUYÊN ĐỀ 3

3.19. Anh Nam cần vay 50 triệu đồng ngay bây giờ và có thể trả khoản vay sau 6 tháng. Để số tiền lãi phải trả ít hơn, anh Nam nên chọn khoản vay lãi kép kì hạn 3 tháng với lãi suất 9% một năm hay khoản vay lãi suất đơn 10% một năm?

3.20. Giả sử bạn muốn mở một tài khoản thị trường tiền tệ. Bạn đến thăm hai ngân hàng để xác định tỉ giá thị trường tiền tệ của họ. Ngân hàng A cung cấp cho bạn lãi suất 6% một năm và tính lãi kép hằng ngày. Ngân hàng B cung cấp cho bạn lãi suất 6,02% một năm và tính lãi kép hằng quý. Ngân hàng nào đang cung cấp giao dịch tốt hơn?

3.21. Mất bao lâu để một khoản đầu tư tăng gấp đôi giá trị nếu nó được đầu tư với lãi suất 8% một năm theo hình thức:

a) Tính lãi kép hằng tháng?
b) Tính lãi kép hằng quý?

3.22. Giả sử học phí trung bình của một trường đại học trong năm học 2021 – 2022 là 18 triệu đồng/năm.

a) Nếu học phí tăng đều đặn 8% mỗi năm, thì học phí trung bình tại trường này trong năm học 2029 – 2030 sẽ là bao nhiêu?
b) Nếu ngân hàng cam kết lãi suất kép kì hạn 12 tháng là 6% một năm, thì cần gửi bao nhiêu tiền vào đầu tháng 9 năm 2021 để đủ chi trả học phí cho năm học đầu tiên của một sinh viên năm thứ nhất sẽ nhập học vào tháng 9 năm 2029?

3.23. Bạn nên đầu tư bao nhiêu tiền mỗi quý ở mức lãi suất 10% mỗi năm, tính lãi kép hằng quý, để có 200 triệu đồng sau hai năm?

3.24. Để mua nhà, một cặp vợ chồng vay một khoản tiền 2 tỉ đồng trong vòng 20 năm với lãi suất 9% mỗi năm, được tính lãi kép hằng tháng.

a) Số tiền họ phải trả hằng tháng là bao nhiêu?
b) Tổng số tiền họ sẽ trả trong khoảng thời gian 20 năm là bao nhiêu?
c) Nếu thay vì đi vay, cặp vợ chồng này gửi các khoản thanh toán hằng tháng vào một tài khoản tích luỹ được trả lãi suất 9% mỗi năm, được tính lãi kép hằng tháng, thì tài khoản này sẽ có bao nhiêu tiền vào cuối kì sau 20 năm?

# BẢNG TRA CỨU TỪ NGỮ

## B
- Bảng phân bố xác suất của biến ngẫu nhiên rời rạc 7
- Bài toán quy hoạch tuyến tính hai biến 24
- Bài toán tối ưu 23
- Biến ngẫu nhiên rời rạc 6
- Biến ngẫu nhiên có phân bố nhị thức 8

## C
- Công thức Bernoulli 15
- Công thức lãi đơn 49
- Công thức lãi kép 50
- Chi phí biên 41
- Chi phí trung bình 41

## D
- Doanh thu biên 41

## Đ
- Đầu tư 60
- Điểm cực biên 26
- Định luật phản xạ ánh sáng 38
- Định luật khúc xạ ánh sáng 38
- Độ lệch chuẩn 11

## G
- Giá trị hiện tại 63
- Giá trị hiện tại của niên kim 65
- Giá trị tối ưu 24
- Giá trị tương lai 50

## H
- Hàm cầu 39
- Hàm chi phí 39
- Hàm doanh thu 39
- Hàm lợi nhuận 39
- Hàm mục tiêu 24

## K
- Khoản thanh toán 57
- Kì vọng 9

## L
- Lãi đơn 49
- Lãi kép 50
- Lãi suất thực 52
- Lạm phát 51
- Lợi nhuận biên 41

## M
- Miền chấp nhận được 24
- Miền nghiệm (của hệ bất phương trình bậc nhất) 24

## N
- Niên kim 65

## P
- Phân bố nhị thức 17
- Phí sử dụng thẻ tín dụng 55
- Phép thử lặp 15
- Phương án chấp nhận được 24
- Phương án cực biên 26
- Phương án tối ưu 24
- Phương sai 11

## S
- Số tiền của niên kim 65

## T
- Tập các phương án chấp nhận được 24
- Tỉ lệ lạm phát 51
- Tiền tệ 47
- Thẻ tín dụng 54
- Trả góp 57

# BẢNG GIẢI THÍCH THUẬT NGỮ

|  Thuật ngữ | Giải thích  |
| --- | --- |
|  Bảng phân bố xác suất của biến ngẫu nhiên rời rạc | Bảng mô tả cụ thể xác suất để biến ngẫu nhiên rời rạc X nhận giá trị cho trước  |
|  Bài toán quy hoạch tuyến tính | Bài toán tối ưu, trong đó hàm mục tiêu và các ràng buộc đều là tuyến tính  |
|  Bài toán tối ưu | Bài toán cực đại hoá hoặc cực tiểu hoá một hàm số nhận giá trị thực (thường được gọi là hàm mục tiêu) với các biến số thoả mãn các ràng buộc cho trước. Ở đây cả hàm mục tiêu và các ràng buộc có thể được cho trước hoặc là phải tự xác định từ ý nghĩa của bài toán thực tế sau khi đã được mô hình hoá toán học.  |
|  Biến ngẫu nhiên rời rạc | Đại lượng nhận giá trị bằng số thuộc một tập hợp hữu hạn nào đó và giá trị ấy là ngẫu nhiên, không dự đoán trước được  |
|  Hệ bất phương trình bậc nhất hai ẩn | Hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn mà ta cần tìm nghiệm chung của chúng  |
|  Lạm phát | Sự tăng mức giá chung một cách liên tục của hàng hoá và dịch vụ theo thời gian và sự mất giá trị của một loại tiền tệ nào đó  |
|  Lãi suất danh nghĩa | Tỉ lệ biểu thị sự gia tăng của tiền sau một thời gian nhất định (thường là 1 năm) nhưng chưa tính tới sự thay đổi sức mua của loại tiền đó (chưa tính đến lạm phát)  |
|  Lãi suất thực | Nếu r là lãi suất, g là tỉ lệ lạm phát thì lãi suất thực là $r_{\text{thực}} = \frac{r - g}{1 + g}$  |
|  Miền chấp nhận được | Tập tất cả các phương án chấp nhận được của một bài toán quy hoạch tuyến tính  |
|  Phương án chấp nhận được | Phương án thoả mãn đồng thời các ràng buộc  |
|  Phương án cực biên | Phương án nằm ở đỉnh của miền nghiệm  |
|  Phương án tối ưu | Phương án chấp nhận được mà tại đó hàm mục tiêu đạt cực tiểu (hoặc cực đại)  |
|  Phân bố nhị thức | Phân bố xác suất rời rạc với hai tham số n và p, kí hiệu của số lượng lượt thử thành công trong n lượt thử độc lập với kết quả CÓ hoặc KHÔNG thành công  |
