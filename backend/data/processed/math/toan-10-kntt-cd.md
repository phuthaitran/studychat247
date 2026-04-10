
# CHUYÊN ĐỀ HỌC TẬP TOÁN 10

$$
(a + b) ^ {n} = \sum_ {i = 1} ^ {n} C _ {i j} ^ {k} a ^ {n - k} b ^ {k}
$$

# MỤC LỤC

## CHUYÊN ĐỀ 1
HỆ PHƯƠNG TRÌNH BẬC NHẤT BA ẨN

|  Bài 1. Hệ phương trình bậc nhất ba ẩn | 5  |
| --- | --- |
|  Bài 2. Ứng dụng của hệ phương trình bậc nhất ba ẩn | 15  |
|  Bài tập cuối chuyên đề 1 | 23  |

## CHUYÊN ĐỀ 2
PHƯƠNG PHÁP QUY NẠP TOÁN HỌC, NHỊ THỨC NEWTON

|  Bài 3. Phương pháp quy nạp toán học | 25  |
| --- | --- |
|  Bài 4. Nhị thức Newton | 32  |
|  Bài tập cuối chuyên đề 2 | 38  |

## CHUYÊN ĐỀ 3
BA ĐƯỜNG CONIC VÀ ỨNG DỤNG

|  Bài 5. Elip | 39  |
| --- | --- |
|  Bài 6. Hypebol | 47  |
|  Bài 7. Parabol | 54  |
|  Bài 8. Sự thống nhất giữa ba đường conic | 57  |
|  Bài tập cuối chuyên đề 3 | 61  |

|  Bảng tra cứu thuật ngữ | 62  |
| --- | --- |
|  Bảng giải thích thuật ngữ | 63  |5

# CHUYÊN DỄ 1 HỆ PHƯƠNG TRÌNH BẬC NHẤT BA ẨN

Ở lớp 9, các em đã biết cách giải hệ phương trình bậc nhất hai ẩn và làm quen với một vài ứng dụng của chúng. Trong chuyên đề này, các em sẽ được giới thiệu cách giải hệ phương trình bậc nhất ba ẩn bằng phương pháp Gauss và bằng máy tính cầm tay, cũng như những ứng dụng phong phú của chúng trong vật lí, hoá học, sinh học và trong thực tế cuộc sống.

$$
\begin{array}{l}
a_1 x + b_1 y + c_1 z = d_1 \\
b_1 y + c_1' z = d_2 \\
b_3 y + c_3 z = d_3 \\
\end{array}
$$

$$
\begin{array}{l}
a_1 x + b_1 y + c_1 z = d_1 \\
b_2 y + c_2 z = d_2 \\
c_1 z = d_3 \\
\end{array}
$$

## Bài 1 HỆ PHƯƠNG TRÌNH BẬC NHẤT BA ẨN

**Thuật ngữ** 
- Hệ phương trình bậc nhất ba ẩn  
- Nghiệm của hệ phương trình bậc nhất ba ẩn  
- Phương pháp Gauss

**Kiến thức, kĩ năng**  
- Nhận biết hệ phương trình bậc nhất ba ẩn.  
- Giải hệ phương trình bậc nhất ba ẩn bằng phương pháp Gauss.  
- Tìm nghiệm của hệ phương trình bậc nhất ba ẩn bằng máy tính cầm tay.  


Ông An đầu tư 240 triệu đồng vào ba quỹ khác nhau: một phần trong quỹ thị trường tiền tệ (là một loại quỹ đầu tư thị trường, tập trung vào các sản phẩm tài chính ngắn hạn như tín phiếu kho bạc, trái phiếu ngắn hạn, chứng chỉ tiền gửi,...) với tiền lãi nhận được là 3% một năm, một phần trong trái phiếu chính phủ với tiền lãi nhận được là 4% một năm và phần còn lại trong một ngân hàng với tiền lãi nhận được là 7% một năm. Số tiền ông An đầu tư vào ngân hàng nhiều hơn vào trái phiếu Chính phủ là 80 triệu đồng và tổng số tiền lãi thu được sau năm đầu tiên ở cả ba quỹ là 13,4 triệu đồng. Hỏi ông An đã đầu tư bao nhiêu tiền vào mỗi loại quỹ?

### 1. KHÁI NIỆM HỆ PHƯƠNG TRÌNH BẬC NHẤT BA ẨN

#### HĐ1. Khái niệm hệ phương trình bậc nhất ba ẩn

Xét hệ phương trình với ẩn là $x, y, z$ sau:

$$
\left\{ \begin{array}{l} x + y + z = 2 \\ x + 2y + 3z = 1 \\ 2x + y + 3z = -1. \end{array} \right.
$$

a) Mỗi phương trình của hệ trên có bậc mấy đối với các ẩn $x, y, z$?

b) Thử lại rằng bộ ba số $(x; y; z) = (1; 3; -2)$ thoả mãn cả ba phương trình của hệ.

c) Bằng cách thay trực tiếp vào hệ, hãy kiểm tra bộ ba số $(1; 1; 2)$ có thoả mãn hệ phương trình đã cho không.

Đây là ba phương trình bậc nhất ba ẩn.

Bộ ba số $(1; 3; -2)$ gọi là một nghiệm của hệ.


- Phương trình bậc nhất ba ẩn có dạng tổng quát là

$$
a x + b y + c z = d,
$$

trong đó $x, y, z$ là ba ẩn; $a, b, c, d$ là các hệ số và $a, b, c$ không đồng thời bằng 0.

Mỗi bộ ba số $(x_0; y_0; z_0)$ thoả mãn $a x_0 + b y_0 + c z_0 = d$ gọi là một nghiệm của phương trình bậc nhất ba ẩn đã cho.

- Hệ phương trình bậc nhất ba ẩn là hệ gồm một số phương trình bậc nhất ba ẩn. Mỗi nghiệm chung của các phương trình đó được gọi là một nghiệm của hệ phương trình đã cho.

- Nói riêng, hệ ba phương trình bậc nhất ba ẩn có dạng tổng quát là

$$
\left\{ \begin{array}{l} a_1 x + b_1 y + c_1 z = d_1 \\ a_2 x + b_2 y + c_2 z = d_2 \\ a_3 x + b_3 y + c_3 z = d_3 \end{array} \right.
$$

trong đó $x, y, z$ là ba ẩn; các chữ số còn lại là các hệ số. Ở đây, trong mỗi phương trình, ít nhất một trong các hệ số $a_i, b_i, c_i, (i = 1, 2, 3)$ phải khác 0.

**Chú ý.** Trong sách này ta chỉ xét các hệ phương trình có số phương trình bằng đúng số ẩn, nên từ nay về sau ta sẽ gọi tắt là hệ phương trình bậc nhất ba ẩn (hay hệ bậc nhất ba ẩn) thay cho hệ ba phương trình bậc nhất ba ẩn.

#### Ví dụ 1. 
Hệ phương trình nào dưới đây là hệ phương trình bậc nhất ba ẩn? Kiểm tra xem bộ ba số $(1; 2; -3)$ có phải là một nghiệm của hệ phương trình bậc nhất ba ẩn đó không.

a) $\left\{ \begin{array}{l} 2x + 3y - 5z = 13 \\ 4x - 2y - 3z = 3 \\ -x + 2y + 4z^2 = -1; \end{array} \right.$

b) $\left\{ \begin{array}{l} -2x + y + z = -3 \\ 5x + y - 3z = 16 \\ x + 2y = 5. \end{array} \right.$

**Giải**

Hệ phương trình ở câu a) không phải là hệ phương trình bậc nhất vì phương trình thứ ba chứa $z^2$.

Hệ phương trình ở câu b) là hệ phương trình bậc nhất ba ấn. Thay $x = 1; y = 2; z = -3$ vào các phương trình trong hệ ta được

$$
\left\{ \begin{array}{l} -3 = -3 \\ 16 = 16 \\ 5 = 5. \end{array} \right.
$$

Bộ ba số (1; 2; -3) nghiệm đúng cả ba phương trình của hệ.

Do đó (1; 2; -3) là một nghiệm của hệ.

#### Luyện tập 1.

Hệ nào dưới đây là hệ phương trình bậc nhất ba ấn? Kiểm tra xem bộ ba số (-3; 2; -1) có phải là nghiệm của hệ phương trình bậc nhất ba ấn đó không.

a) $\left\{ \begin{array}{l} x + 2y - 3z = 1 \\ 2x - 3y + 7z = 15 \\ 3x^2 - 4y + z = -3; \end{array} \right.$

b) $\left\{ \begin{array}{l} -x + y + z = 4 \\ 2x + y - 3z = -1 \\ 3x - 2z = -7. \end{array} \right.$

### 2. GIẢI HỆ PHƯƠNG TRÌNH BẬC NHẤT BA ĂN BẰNG PHƯƠNG PHÁP GAUSS

#### HĐ2. Hệ bậc nhất ba ấn có dạng tam giác

Cho hệ phương trình

$$
\left\{ \begin{array}{c} x + y - 2z = 3 \\ y + z = 7 \\ 2z = 4. \end{array} \right.
$$

Hệ phương trình dạng tam giác có cách giải rất đơn giản.

Từ phương trình cuối hay tính $z$, sau đó thay vào phương trình thứ hai để tìm $y$, cuối cùng thay $y$ và $z$ tìm được vào phương trình đầu để tìm $x$.

Để giải hệ phương trình dạng tam giác, trước hết ta giải từ phương trình chứa một ấn, sau đó thay giá trị tìm được của ấn này vào phương trình chứa hai ấn để tìm giá trị của ấn thứ hai, cuối cùng thay các giá trị tìm được vào phương trình còn lại để tìm giá trị của ấn thứ ba.

#### Ví dụ 2.

Giải hệ phương trình

$$
\left\{ \begin{array}{c} x + y - 2z = 4 \\ 3y + z = 2 \\ -z = 1. \end{array} \right.
$$

**Giải**

Từ phương trình thứ ba ta có $z = -1$. Thay $z = -1$ vào phương trình thứ hai ta có $3y - 1 = 2$ hay $y = 1$. Với $y$, $z$ tìm được, thay vào phương trình thứ nhất ta được $x + 1 + 2 = 4$ hay $x = 1$.

Vậy nghiệm của hệ đã cho là $(x; y; z) = (1; 1; -1)$.8

#### Luyện tập 2. 

Giải hệ phương trình

$$
\left\{ \begin{array}{l l} 2x  = 3 \\ x + y  = 2 \\ 2x - 2y + z  = -1. \end{array} \right.
$$

#### HĐ3. Giải hệ phương trình bậc nhất ba ấn bằng phương pháp Gauss

Cho hệ phương trình

$$
\left\{ \begin{array}{l} x + y - 2z = 3 \\ -x + y + 6z = 13 \\ 2x + y - 9z = -5. \end{array} \right.
$$

a) Khử ấn $x$ của phương trình thứ hai bằng cách cộng phương trình này với phương trình thứ nhất. Viết phương trình nhận được (phương trình này không còn chứa ấn $x$ và là phương trình thứ hai của hệ mới, tương đương với hệ ban đầu).

b) Khử ấn $x$ của phương trình thứ ba bằng cách nhận phương trình thứ nhất với $-2$ và cộng với phương trình thứ ba. Viết phương trình thứ ba mới nhận được. Từ đó viết hệ mới nhận được sau hai bước trên (đã khử $x$ ở hai phương trình cuối).

c) Làm tương tự đối với hệ mới nhận được ở câu b), từ phương trình thứ hai và thứ ba khử ấn $y$ ở phương trình thứ ba. Viết hệ dạng tam giác nhận được.

d) Giải hệ dạng tam giác nhận được ở câu c). Từ đó suy ra nghiệm của hệ đã cho.

Johann Carl Friedrich Gauss (1777 – 1855), nhà toán học và vật lí người Đức, là một trong những nhà toán học vĩ đại nhất trong lịch sử.

Để giải một hệ phương trình bậc nhất ba ấn, ta đưa hệ đó về một hệ đơn giản hơn (thường có dạng tam giác), bằng cách sử dụng các phép biến đổi sau đây:

- Nhân hai vế của một phương trình của hệ với một số khác 0;
- Đổi vị trí hai phương trình của hệ;
- Cộng mỗi vế của một phương trình (sau khi đã nhân với một số khác 0) với vế tương ứng của phương trình khác để được phương trình mới có số ấn ít hơn.

Từ đó có thể giải hệ đã cho. Phương pháp này được gọi là **phương pháp Gauss**.

#### Ví dụ 3.

 Giải hệ phương trình sau bằng phương pháp Gauss

$$
\left\{ \begin{array}{l} x + y + z = 2 \\ 7x + 3y + z = 4 \\ -5x + 7y - 2z = 5. \end{array} \right.
$$

**Giải**

Nhân hai vế của phương trình thứ nhất của hệ với $(-7)$ rồi cộng với phương trình thứ hai theo từng vế tương ứng ta được hệ phương trình (đã khử ấn $x$ ở phương trình thứ hai)
$$
\left\{ \begin{array}{l} x + y + z   = 2 \\ - 4 y - 6 z   = - 1 0 \\ - 5 x + 7 y - 2 z   = 5. \end{array} \right.
$$

Nhân hai vế của phương trình thứ nhất của hệ này với 5 rồi cộng với phương trình thứ ba theo từng vế tương ứng ta được hệ phương trình (đã khử ấn x ở phương trình cuối)

$$
\left\{ \begin{array}{l} x + y + z   = 2 \\ - 4 y - 6 z   = - 1 0 \\ 1 2 y + 3 z   = 1 5. \end{array} \right.
$$

Nhân hai vế của phương trình thứ hai của hệ này với 3 rồi cộng với phương trình thứ ba theo từng vế tương ứng ta được hệ phương trình tương đương dạng tam giác

$$
\left\{ \begin{array}{l} x + y + z   = 2 \\ - 4 y - 6 z   = - 1 0 \\ - 1 5 z   = - 1 5. \end{array} \right.
$$

Từ phương trình thứ ba ta có $z = 1$. Thế vào phương trình thứ hai ta được $y = 1$. Cuối cùng ta có $x = 2 - 1 - 1 = 0$. Vậy nghiệm của hệ phương trình là $(x; y; z) = (0; 1; 1)$.

Hệ có nghiệm duy nhất

#### Ví dụ 4. 

Giải hệ phương trình

$$
\left\{ \begin{array}{l} 2 x + y - z = 5 \\ x + y + z = 3 \\ 5 x + 4 y + 2 z = 1 0. \end{array} \right.
$$

**Giải**

Đổi chỗ phương trình thứ nhất và phương trình thứ hai ta được hệ phương trình

$$
\left\{ \begin{array}{l} x + y + z = 3 \\ 2 x + y - z = 5 \\ 5 x + 4 y + 2 z = 1 0. \end{array} \right.
$$

Nhân hai vế của phương trình thứ nhất của hệ với $(-2)$ rồi cộng với phương trình thứ hai theo từng vế tương ứng ta được hệ phương trình (đã khử ấn x ở phương trình thứ hai)

$$
\left\{ \begin{array}{r l} x + y + z = 3 \\ - y - 3 z = - 1 \\ 5 x + 4 y + 2 z = 1 0. \end{array} \right.
$$

Nhân hai vế của phương trình thứ nhất của hệ với $(-5)$ rồi cộng với phương trình thứ ba theo từng vế tương ứng ta được hệ phương trình (đã khử ấn x ở phương trình cuối)
$$
\left\{ \begin{array}{l} x + y + z = 3 \\ - y - 3 z = - 1 \\ - y - 3 z = - 5. \end{array} \right.
$$

Từ hai phương trình cuối, suy ra $-1 = -5$, điều này vô li.

Vậy hệ ban đầu vô nghiệm.

Hệ vô nghiệm.

#### Ví dụ 5. 

Giải hệ phương trình sau

$$
\left\{ \begin{array}{l} 5 x + y - 4 z = 2 \\ x - y - z = - 1 \\ 3 x + 3 y - 2 z = 4. \end{array} \right.
$$

**Giải**

Trước hết ta đổi chỗ phương trình thứ nhất và phương trình thứ hai:

$$
\left\{ \begin{array}{l} x - y - z = - 1 \\ 5 x + y - 4 z = 2 \\ 3 x + 3 y - 2 z = 4. \end{array} \right.
$$

Nhân hai về của phương trình thứ nhất của hệ với $(-5)$ rồi cộng với phương trình thứ hai theo từng về tương ứng ta được hệ phương trình (đã khử ẩn $x$ ở phương trình thứ hai)

$$
\left\{ \begin{array}{l} x - y - z = - 1 \\ 6 y + z = 7 \\ 3 x + 3 y - 2 z = 4. \end{array} \right.
$$

Nhân hai về của phương trình thứ nhất của hệ với $(-3)$ rồi cộng với phương trình thứ ba theo từng về tương ứng ta được hệ phương trình (đã khử ẩn $x$ ở phương trình cuối)

$$
\left\{ \begin{array}{l} x - y - z = - 1 \\ 6 y + z = 7 \\ 6 y + z = 7. \end{array} \right.
$$

Nhận thấy phương trình thứ hai và thứ ba của hệ giống nhau. Như vậy, ta được hệ tương đương dạng hình thang

$$
\left\{ \begin{array}{l} x - y - z = - 1 \\ 6 y + z = 7. \end{array} \right.
$$

Hệ có vô số nghiệm.

Rút $z$ theo $y$ từ phương trình thứ hai của hệ ta được $z = 7 - 6y$. Thế vào phương trình thứ nhất ta được $x - y - 7 + 6y = -1$ hay $x = -5y + 6$. Vậy hệ đã cho có vô số nghiệm và tập nghiệm của hệ là $S = \left\{ \left( -5y + 6; y; 7 - 6y \right) \mid y \in \mathbb{R} \right\}$.

Nhận xét. Hệ phương trình bậc nhất ba ẩn có thể có nghiệm duy nhất, vô nghiệm hoặc có vô số nghiệm

#### Luyện tập 3. Giải các hệ phương trình sau:

a) $\left\{ \begin{array}{l} 2x + y - 3z = 3 \\ x + y + 3z = 2 \\ 3x - 2y + z = -1; \end{array} \right.$

b) $\left\{ \begin{array}{l} 4x + y + 3z = -3 \\ 2x + y - z = 1 \\ 5x + 2y = 1; \end{array} \right.$

c) $\left\{ \begin{array}{l} x + 2z = -2 \\ 2x + y - z = 1 \\ 4x + y + 3z = -3. \end{array} \right.$

#### Ví dụ 6. 

Giải tình huống mở đầu. Gọi $x, y, z$ (triệu đồng) lần lượt là số tiền đầu tư của ông An vào ba quỹ: thị trường tiền tệ, trái phiếu Chính phủ và một ngân hàng. Khi đó

$$
x + y + z = 240.
$$

Vì số tiền đầu tư vào quỹ trong ngân hàng nhiều hơn quỹ trái phiếu Chính phủ là 80 triệu đồng nên ta có

$$
z = y + 80, \text{ hay } -y + z = 80.
$$

Do tổng số tiền lãi trong một năm là 13,4 triệu đồng nên ta có

$$
0,03x + 0,04y + 0,07z = 13,4.
$$

Từ đó, ta được hệ phương trình bậc nhất ba lần

$$
\left\{ \begin{array}{l} x  +  y  + z = 240 \\  - y  +  z = 80 \\ 0,03x + 0,04y  +  0,07z  = 13,4. \end{array} \right.
$$

Ta giải hệ bằng phương pháp Gauss.

Nhân hai về của phương trình thứ nhất của hệ với $(-0,03)$ rồi cộng với phương trình thứ ba theo từng về tương ứng, ta được hệ phương trình

$$
\left\{ \begin{array}{l} x + y + z = 240 \\ - y + z = 80 \\ 0,01y + 0,04z = 6,2. \end{array} \right.
$$

Nhân hai về của phương trình thứ hai của hệ với 0,01 rồi cộng với phương trình thứ ba theo từng về tương ứng, ta được hệ phương trình dạng tam giác.

$$
\left\{ \begin{array}{l} x + y + z = 240 \\ - y + z = 80 \\ 0,05z = 7. \end{array} \right.
$$

Từ phương trình thứ ba ta có $z = 140$. Thế vào phương trình thứ hai ta được $y = 60$. Cuối cùng ta có $x = 240 - 140 - 60 = 40$.

Vậy số tiền ông An đầu tư vào ba quỹ: thị trường tiền tệ, trái phiếu Chính phủ và một ngân hàng lần lượt là 40 triệu đồng, 60 triệu đồng, 140 triệu đồng.

#### Vận dụng 1. 
Hà mua văn phòng phẩm cho nhóm bạn cùng lớp gồm Hà, Lan và Minh hết tổng cộng 820 nghìn đồng. Hà quên không lưu hoá đơn của mỗi bạn, nhưng nhớ được rằng số tiền trả cho Lan ít hơn một nửa số tiền trả cho Hà là 5 nghìn đồng, số tiền trả cho Minh nhiều hơn số tiền trả cho Lan là 210 nghìn đồng. Hỏi mỗi bạn Lan và Minh phải trả cho Hà bao nhiêu tiền?12

### 3. TÌM NGHIỆM CỦA HỆ PHƯƠNG TRÌNH BẬC NHẤT BA ĂN BẰNG MÁY TÍNH CẨM TAY

#### HĐ4. Dùng máy tính cầm tay để tìm nghiệm của hệ:

$$
\left\{
\begin{array}{l}
-2x - 3y + z = 5 \\
2x + y + 2z = -3 \\
-x + 2y - 3z = 2.
\end{array}
\right.
$$

Sử dụng máy tính cầm tay để tìm nghiệm của các hệ phương trình bậc nhất ba ấn một cách dễ dàng và nhanh chóng!

Ta có thể dùng máy tính cầm tay để tìm nghiệm của hệ.

Sau khi mở máy, ta ấn liên tiếp các phím sau đây.

MODE 5 2 - 2 = - 3 = 1 = 5 = 2 = 1 = 2 = -3 = -1 = 2 = -3 = 2 = =

Tức là $x = -4$.

Ấn tiếp phím = ta thấy màn hình hiện như sau:

Tức là $y = \frac{11}{7}$.

Ấn tiếp phím $\square$ ta thấy màn hình hiện như sau:

Tức là $z = \frac{12}{7}$.

Vậy nghiệm của hệ phương trình là $(x; y; z) = \left(-4; \frac{11}{7}; \frac{12}{7}\right)$.

Ta có thể dùng máy tính cầm tay để giải hệ phương trình bậc nhất ba ấn. Sau khi mở máy, ta lần lượt thực hiện các thao tác sau:

+ Vào chương trình giải phương trình, ấn MODE 5

Màn hình máy tính sẽ hiển thị như sau:

1: anX + bnY = cn

2: anX + bnY + cnZ = dn

3: aX2 + bX + c = 0

4: aX2 + bX2 + cX + d = 0

+ Chọn hệ phương trình bậc nhất ba ấn, ấn 2

Màn hình máy tính sẽ hiển thị như sau:

+ Nhập các hệ số để giải hệ phương trình.

#### Ví dụ 7. 

Dùng máy tính cầm tay tìm nghiệm của các hệ sau:

a) $\left\{ \begin{array}{l} x + y + z = 7 \\ 3x - 2y + 2z = 5 \\ 4x - y + 3z = 10; \end{array} \right.$

b) $\left\{ \begin{array}{l} x + y + 2z = 9 \\ 2x - y + 3z = 9 \\ 5x + 2y + 9z = 36. \end{array} \right.$

**Giải**

a) Ta ấn liên tiếp dãy các phím

MODE 5 2 1 = 1 = 1 = 7 = 3 = -2 = 2 = 5 = 4 = -1 = 3 = 10 = =

Thấy hiện ra trên màn hình dòng chữ “No-Solution” như sau:

Tức là hệ phương trình đã cho vô nghiệm.

b) Ta ấn liên tiếp dãy các phím

MODE 5 2 1 = 1 = 2 = 9 = 2 = -1 = 3 = 9 = 5 = 2 = 9 = 36 = =

Thấy hiện ra trên màn hình dòng chữ “Infinite Sol” như sau:

Tức là hệ phương trình đã cho có vô số nghiệm.

#### Luyện tập 4. 

Sử dụng máy tính cầm tay tìm nghiệm của các hệ phương trình trong Ví dụ 3, Ví dụ 4, Ví dụ 5 và Luyện tập 3.

#### Vận dụng 2. 

Tại một quốc gia, khoảng 400 loài động vật nằm trong danh sách các loài có nguy cơ tuyệt chủng. Các nhóm động vật có vú, chim và cá chiếm 55% các loài có nguy cơ tuyệt chủng. Nhóm chim chiếm nhiều hơn 0,7% so với nhóm cá, nhóm cá chiếm nhiều hơn 1,5% so với động vật có vú. Hỏi mồi nhóm động vật có vú, chim và cá chiếm bao nhiêu phần trăm trong các loài có nguy cơ tuyệt chủng?

### BÀI TẬP

1.1. Hệ nào dưới đây là hệ phương trình bậc nhất ba ần? Kiểm tra xem bộ số (2; 0; -1) có phải là nghiệm của hệ phương trình bậc nhất ba ần đó không.

a) $\left\{ \begin{array}{ll} x - 2z = 4 \\ 2x + y - z = 5 \\ -3x + 2y = -6; \end{array} \right.$

b) $\left\{ \begin{array}{ll} x - 2y + 3z = 7 \\ 2x - y^2 + z = 2 \\ x + 2y = -1. \end{array} \right.$

1.2. Giải các hệ phương trình sau:

a) $\left\{ \begin{array}{ll} 2x - y - z = 20 \\ x + y = -5 \\ x = 10; \end{array} \right.$

b) $\left\{ \begin{array}{ll} x - y - 3z = 20 \\ x - z = 3 \\ x + 3z = -7. \end{array} \right.$

1.3. Giải các hệ phương trình sau bằng phương pháp Gauss:

a) $\left\{ \begin{array}{ll} 2x - y - z = 2 \\ x + y = 3 \\ x - y + z = 2; \end{array} \right.$

b) $\left\{ \begin{array}{ll} 3x - y - z = 2 \\ x + 2y + z = 5 \\ -x + y = 2; \end{array} \right.$

c) $\left\{ \begin{array}{ll} x - 3y - z = -6 \\ 2x - y + 2z = 6 \\ 4x - 7y = -6; \end{array} \right.$

d) $\left\{ \begin{array}{ll} x - 3y - z = -6 \\ 2x - y + 2z = 6 \\ 4x - 7y = 3; \end{array} \right.$

e) $\left\{ \begin{array}{ll} 3x - y - 7z = 2 \\ 4x - y + z = 11 \\ -5x - y - 9z = -22; \end{array} \right.$

f) $\left\{ \begin{array}{ll} 2x - 3y - 4z = -2 \\ 5x - y - 2z = 3 \\ 7x - 4y - 6z = 1. \end{array} \right.$

Kiểm tra lại kết quả tìm được bằng cách sử dụng máy tính cầm tay.

1.4. Ba người cùng làm việc cho một công ty với vị trí lần lượt là quản lí kho, quản lí văn phòng và tài xế xe tải. Tổng tiền lương hàng năm của người quản lí kho và người quản lí văn phòng là 164 triệu đồng, còn của người quản lí kho và tài xế xe tải là 156 triệu đồng. Mỗi năm, người quản lí kho lĩnh lương nhiều hơn tài xế xe tải 8 triệu đồng. Hỏi lương hàng năm của mỗi người là bao nhiêu?

1.5. Năm ngoái, người ta có thể mua ba mẫu xe ô tô của ba hãng X, Y, Z với tổng số tiền là 2,8 tỉ đồng. Năm nay, do lạm phát, để mua ba chiếc xe đó cần 3,018 tỉ đồng. Giá xe ô tô của hãng X tăng 8%, của hãng Y tăng 5% và của hãng Z tăng 12%. Nếu trong năm ngoái giá chiếc xe của hãng Y thấp hơn 200 triệu đồng so với giá chiếc xe của hãng X thì giá của mỗi chiếc xe trong năm ngoái là bao nhiêu?

1.6. Cho hệ ba phương trình bậc nhất ba ần sau

$\left\{ \begin{array}{ll} a_1x + b_1y + c_1z = d_1 \\ a_2x + b_2y + c_2z = d_2 \\ a_3x + b_3y + c_3z = d_3. \end{array} \right.$

a) Giả sử $(x_0; y_0; z_0)$ và $(x_1; y_1; z_1)$ là hai nghiệm phân biệt của hệ phương trình trên.

Chứng minh rằng $\left(\frac{x_0 + x_1}{2}; \frac{y_0 + y_1}{2}; \frac{z_0 + z_1}{2}\right)$ cũng là một nghiệm của hệ.

b) Sử dụng kết quả của câu a) chứng minh rằng, nếu hệ phương trình bậc nhất ba ần có hai nghiệm phân biệt thì nó sẽ có vô số nghiệm.

## Bài 2 ỨNG DỤNG CỦA HỆ PHƯƠNG TRÌNH BẬC NHẤT BA ẨN

**Thuật ngữ**
- Hàm cung
- Hàm cầu
- Cân bằng cung – cầu

**Kiến thức, kĩ năng**
- Vận dụng hệ phương trình bậc nhất ba ẩn vào giải một số bài toán vật lí, hoá học và sinh học.
- Vận dụng hệ phương trình bậc nhất ba ẩn để giải quyết một số vấn đề thực tiễn cuộc sống.

Hệ phương trình bậc nhất ba ẩn được vận dụng để giải quyết rất nhiều bài toán khác nhau. Trong bài này ta sẽ gặp một số ví dụ vận dụng như vậy trong các lĩnh vực vật lí, hoá học, sinh học, kinh tế học, ... Chúng ta cũng sẽ được làm quen với một số dạng toán giải bằng cách lập hệ phương trình bậc nhất ba ẩn.

### 1. GIẢI MỘT SỐ BÀI TOÁN VẬT LÍ, HOÁ HỌC VÀ SINH HỌC

#### ỨNG DỤNG TRONG SINH HỌC

Trong sinh học có nhiều bài toán dẫn đến việc giải hệ phương trình bậc nhất nhiều ẩn. Dưới đây giới thiệu hai ví dụ đơn giản trong ngành chăn nuôi và ngành sinh thái.

**Bài toán sản xuất gà giống.** Trong trang trại sản xuất gà giống, việc lựa chọn tỉ lệ giữa gà trống và gà mái rất quan trọng. Nếu quá nhiều gà trống thì không hiệu quả kinh tế, nếu ít gà trống quá thì ảnh hưởng đến hiệu quả sản xuất gà giống. Các nghiên cứu chỉ ra rằng tỉ lệ giữa gà trống và gà mái để sản xuất gà giống hiệu quả nhất là 1:10,5. Một đàn gà trưởng thành có tổng số 3 000 con, trong đó tỉ lệ giữa gà trống và gà mái là 5:3. Cần chuyển bao nhiêu gà trống cho mục đích nuôi lấy thịt để hiệu quả cao nhất?

Trang trại sản xuất gà giống

##### HĐ1. Gọi số gà trống trong đàn gà là x, số gà mái trong đàn gà là y, số gà trống cần chuyển sang mục đích nuôi lấy thịt là z.

a) Điều kiện của x, y và z là gì?

b) Từ giả thiết của bài toán, hãy tìm ba phương trình bậc nhất ràng buộc x, y và z, từ đó có một hệ phương trình bậc nhất ba ẩn.

c) Giải hệ phương trình bậc nhất thu được. Từ đó đưa ra câu trả lời cho bài toán.16

Để giải bài toán bằng cách lập hệ phương trình, ta tiến hành theo ba bước sau:

**Bước 1. Lập hệ phương trình:**
- Chọn ấn và đặt điều kiện cho ấn;
- Biểu diễn các đại lượng chưa biết theo các ấn và các đại lượng đã biết;
- Lập các phương trình biểu thị mối quan hệ giữa các đại lượng.

**Bước 2. Giải hệ phương trình nói trên.**

**Bước 3. Kiểm tra xem trong các nghiệm của hệ phương trình, nghiệm nào thích hợp với bài toán và kết luận.**

**Ví dụ 1.** Một khu rừng ngập mặn có diện tích là 1 ha. Bằng kỹ thuật viễn thám, người ta ước lượng sinh khối trên mặt đất của rừng này là 87,2 tấn/ha. Người ta đếm được trong các ô tiêu chuẩn 100 m² có tổng số 161 cây, trong đó số cây bần bằng 15% tổng số cây mầm và cây được. Khối lượng trung bình của một cây bần là 10 kg, cây được là 5 kg và cây mầm là 1 kg. Hãy tính sinh khối của từng loài trên 1 ha rừng.

**Giải**

Đối: 87,2 tấn = 87 200 kg; 1 ha = 10 000 m².

Gọi $x, y, z$ theo thứ tự là số cây bần, cây được và cây mầm trong 1 ha rừng ngập mặn nói trên.

100 m² có tổng số 161 cây nên 10 000 m² có số cây là

$$
161 \cdot \frac{10\,000}{100} = 16\,100.
$$

Do đó $x + y + z = 16 100$.

Số cây bần bằng 15% tổng số cây mầm và cây được nên ta có

$$
x = \frac{15}{100}(y + z) \text{ hay } 20x - 3y - 3z = 0.
$$

Khối lượng trung bình cây bần là 10 kg, cây được là 5 kg và cây mầm là 1 kg nên ta có

$$
10x + 5y + z = 87\,200.
$$

Vậy theo bài ra ta có hệ phương trình

$$
\left\{
\begin{array}{l}
x + y + z = 16\,100 \\
20x - 3y - 3z = 0 \\
10x + 5y + z = 87\,200.
\end{array}
\right.
$$

Dùng máy tính cầm tay giải hệ ta được $x = 2 100, y = 13 050, z = 950$.

Vậy sinh khối bần là $10x = 21 000 kg/ha = 21 tấn/ha$; sinh khối được là $5y = 65 250 kg/ha = 62,25 tấn/ha$; và sinh khối mầm là $z = 950 kg/ha = 0,95 tấn/ha$.

Việc giải nhiều bài toán trong thực tiễn dẫn đến phải đặt ấn và giải hệ phương trình. Cách làm như vậy gọi là giải bài toán bằng cách lập hệ phương trình.

Rừng ngập mặn ở Thái Bình

Sinh khối (còn gọi là sinh khối loài) là tổng trọng lượng của sinh vật sống trong sinh quyển hoặc số lượng sinh vật sống trên một đơn vị diện tích.

(Theo SGK Sinh học 12, Nhà xuất bản Giáo dục Việt Nam, 2017)

#### ỨNG DỤNG TRONG HOÁ HỌC

Ứng dụng đơn giản nhất của hệ phương trình bậc nhất trong môn Hoá học là để cân bằng phương trình phản ứng hoá học. Các hệ phương trình trong trường hợp này thường có vô số nghiệm và người ta thường chọn nghiệm nguyên dương nhỏ nhất. Đầu tiên ta xét phản ứng giữa khi hydrogen tác dụng với oxygen ở nhiệt độ cao để tạo thành nước.

##### Ví dụ 2. 

Cân bằng phương trình phản ứng hoá học $H_2 + O_2 \xrightarrow{f^o} H_2O$.

**Giải**

Giả sử $x, y, z$ là ba số nguyên dương thoả mãn cân bằng phản ứng

$$
xH_2 + yO_2 \xrightarrow{f^o} zH_2O.
$$

Vì số nguyên tử hydrogen và oxygen ở hai về phải bằng nhau nên ta có hệ

$$
\left\{ \begin{array}{l} 2x = 2z \\ 2y = z \end{array} \right. \Leftrightarrow x = z = 2y.
$$

Về mặt toán học, hệ này có vô số nghiệm, tuy nhiên người ta thường chọn bộ nghiệm nguyên dương nhỏ nhất. Cụ thể chọn $y = 1$ ta được $x = z = 2$. Từ đó ta được phương trình cân bằng

$$
2H_2 + O_2 \xrightarrow{f^o} 2H_2O.
$$

Ta xét một phản ứng nữa rất quan trọng trong hoá sinh là phản ứng quang hợp, tức là quá trình thu nhận và chuyển hoá năng lượng ánh sáng mặt trời của thực vật tạo ra hợp chất hữu cơ (glucose) làm nguồn thức ăn cho hầu hết sinh vật trên Trái Đất.

##### Ví dụ 3. Cân bằng phương trình phản ứng quang hợp (dưới điều kiện ánh sáng và chất diệc lục):

$$
CO_2 + H_2O \xrightarrow{} C_6H_{12}O_6 + O_2.
$$

**Giải**

Giả sử $x, y, z, t$ là bốn số nguyên dương thoả mãn cân bằng phản ứng

$$
xCO_2 + yH_2O \xrightarrow{} zC_6H_{12}O_6 + tO_2.
$$

Vì số nguyên tử carbon, hydrogen và oxygen ở hai về phải bằng nhau nên ta có hệ

$$
\left\{ \begin{array}{l} x = 6z \\ 2y = 12z \\ 2x + y = 6z + 2t \end{array} \right. \Leftrightarrow \left\{ \begin{array}{l} \frac{x}{t} = 6\frac{z}{t} \\ \frac{y}{t} = 6\frac{z}{t} \\ 2\frac{x}{t} + \frac{y}{t} = 6\frac{z}{t} + 2. \end{array} \right.
$$

Đặt $X = \frac{x}{t}, Y = \frac{y}{t}, Z = \frac{z}{t}$, ta được hệ phương trình bậc nhất ba ẩn

$$
\left\{ \begin{array}{l} X = 6Z \\ Y = 6Z \\ 2X + Y = 6Z + 2 \end{array} \right. \text{ hay } \left\{ \begin{array}{l} X - 6Z = 0 \\ Y - 6Z = 0 \\ 2X + Y - 6Z = 2. \end{array} \right.
$$

Dùng máy tính cầm tay giải hệ sau cùng, ta được $X = 1$, $Y = 1$, $Z = \frac{1}{6}$. Từ đây suy ra $x = y = t = 6z$.

Chọn $z = 1$ ta được $x = y = t = 6$. Từ đó ta được phương trình cân bằng

$$
6 \mathrm{CO}_{2} + 6 \mathrm{H}_{2} \mathrm{O} \xrightarrow{\text{ánh sáng}} \mathrm{C}_{6} \mathrm{H}_{12} \mathrm{O}_{6} + 6 \mathrm{O}_{2}.
$$

>Quang hợp là quá trình thu nhận và chuyển hoá năng lượng ánh sáng mặt trời của thực vật, tảo và một số vi khuẩn để tạo ra hợp chất hữu cơ (đường glucose) phục vụ bản thân cũng như làm nguồn thức ăn cho hầu hết các sinh vật trên Trái Đất.
>
>(Theo SGK Sinh học 11, Nhà xuất bản Giáo dục Việt Nam, 2017)

#### ỨNG DỤNG TRONG VẬT LÍ

Nhiều bài toán tính điện trở, cường độ dòng điện trong Điện học; tình vận tốc, gia tốc trong Cơ học cũng dẫn đến giải hệ phương trình bậc nhất.

##### Ví dụ 4.

(Bài toán tính cường độ dòng điện) Cho đoạn mạch như Hình 1.1. Biết $R_{1} = 25\,\Omega$, $R_{2} = 36\,\Omega$, $R_{3} = 45\,\Omega$ và hiệu điện thế giữa hai đầu đoạn mạch $U = 60\,\mathrm{V}$. Gọi $I_{1}$ là cường độ dòng điện của mạch chính, $I_{2}$ và $I_{3}$ là cường độ dòng điện mạch rẽ. Tính $I_{1}$, $I_{2}$ và $I_{3}$.

**Giải**

Từ sơ đồ mạch điện, ta thấy $I_{1}$, $I_{2}$ và $I_{3}$ là nghiệm của hệ phương trình

$$
\left\{
\begin{array}{l}
I_{1} - I_{2} - I_{3} = 0 \\
R_{1}I_{1} + R_{2}I_{2} = U \\
R_{2}I_{2} - R_{3}I_{3} = 0
\end{array}
\right.
\quad \text{hay} \quad
\left\{
\begin{array}{l}
I_{1} - I_{2} - I_{3} = 0 \\
25I_{1} + 36I_{2} = 60 \\
36I_{2} - 45I_{3} = 0.
\end{array}
\right.
$$

Dùng máy tính cầm tay giải hệ, ta được $I_{1} = \frac{4}{3}\,\mathrm{A}$, $I_{2} = \frac{20}{27}\,\mathrm{A}$ và $I_{3} = \frac{16}{27}\,\mathrm{A}$.

**Luyện tập 1.** Cân bằng phương trình phản ứng hóa học đốt cháy octane trong oxygen

$$
\mathrm{C}_{6} \mathrm{H}_{18} + \mathrm{O}_{2} \rightarrow \mathrm{CO}_{2} + \mathrm{H}_{2} \mathrm{O}.
$$

### 2. GIẢI BÀI TOÁN CÂN BẰNG CUNG – CẤU

Các nhà kinh tế học đã chỉ ra rằng, giá cả của một mặt hàng bán trên thị trường phụ thuộc vào ba yếu tố chính. Thứ nhất, phụ thuộc vào giá trị của bản thân hàng hoá đó. Thứ hai, phụ thuộc vào giá trị đồng tiền. Thứ ba, phụ thuộc vào quan hệ cung và cầu về mặt hàng đó.

Trong thị trường nhiều mặt hàng, giá cả của mặt hàng này có ảnh hưởng tới giá cả của mặt hàng khác và giá cả của hàng hoá có ảnh hưởng đến lượng cung và lượng cầu của thị trường. Khi phân tích hoạt động của thị trường hàng hoá, các nhà kinh tế học sử dụng hàm cung và hàm cầu để biểu thị sự phụ thuộc của lượng cung và lượng cầu vào giá cả hàng hoá. Người ta thường phải giải bài toán cân bằng giữa cung và cầu. Bài toán này thường dẫn đến việc giải hệ phương trình bậc nhất nhiều lần.

Để đơn giản, ta xét thị trường thực phẩm gồm ba loại mặt hàng là thịt lợn, thịt bò và thịt gà. Khi thịt lợn đắt, thịt bò và thịt gà rẻ thì người tiêu dùng có xu hướng giảm mua thịt lợn, tăng mua thịt bò và thịt gà.

#### HĐ2. Kí hiệu $x$, $y$, $z$ lần lượt là giá của 1 kg thịt lợn, 1 kg thịt bò và 1 kg thịt gà, ở đây $x$, $y$, $z > 0$ và đơn vị là nghìn đồng. 
Kí hiệu: 

$Q_{S_1}$ là lượng thịt lợn mà người bán chấp thuận bán với giá x.

$Q_{S_2}$ là lượng thịt bò mà người bán chấp thuận bán với giá y.

$Q_{S_3}$ là lượng thịt gà mà người bán chấp thuận bán với giá z.

$Q_{D_1}$ là lượng thịt lợn mà người mua chấp thuận mua với giá x.

$Q_{D_2}$ là lượng thịt bò mà người mua chấp thuận mua với giá y.

$Q_{D_3}$ là lượng thịt gà mà người mua chấp thuận mua với giá z.

a) Mức giá thịt lợn x, thịt bò y và thịt gà z phải thỏa mãn điều kiện gì để người bán và người mua cùng hài lòng, tức là mức giá hợp lí nhất?

b) Viết hệ phương trình ràng buộc giữa x, y, z để người bán và người mua cùng hài lòng.

Trong kinh tế học người ta gọi:
- Các hàm $Q_{S_1}$, $Q_{S_2}$ và $Q_{S_3}$ phụ thuộc vào ba biến giá x, y, z là hàm cung (supply function);
- Các hàm $Q_{D_1}$, $Q_{D_2}$ và $Q_{D_3}$ phụ thuộc vào ba biến giá x, y, z là hàm cầu (demand function);
- Hệ phương trình
$$
\begin{cases}
Q_{S_1} = Q_{D_1} \\
Q_{S_2} = Q_{D_2} \\
Q_{S_3} = Q_{D_3}
\end{cases}
$$
gọi là hệ phương trình cân bằng cung – cầu.

#### Ví dụ 5.

Cho biết:

|  Hàm cung thịt lợn là $Q_{S_1} = -120 + 2x$ | Hàm cầu thịt lợn là $Q_{D_1} = 190 - 3x + y - z$  |
| --- | --- |
|  Hàm cung thịt bò là $Q_{S_2} = -200 + 2y$ | Hàm cầu thịt bò là $Q_{D_2} = 440 + 2x - y - z$  |
|  Hàm cung thịt gà là $Q_{S_3} = -210 + 3z$ | Hàm cầu thịt gà là $Q_{D_3} = 260 - x - 2y + 4z$  |

Hãy giải hệ phương trình cân bằng cung – cầu.

**Giải**

Hệ phương trình cân bằng cung – cầu là
$$
\begin{cases}
-120 + 2x = 190 - 3x + y - z \\
-200 + 2y = 440 + 2x - y - z \\
-210 + 3z = 260 - x - 2y + 4z.
\end{cases}
$$

Thu gọn ta được hệ phương trình
$$
\begin{cases}
5x - y + z = 310 \\
2x - 3y - z = -640 \\
x + 2y - z = 470.
\end{cases}
$$

Dùng máy tính cầm tay giải hệ, ta được $x = 90, y = 240, z = 100$.

Vậy giá thịt lợn 90 nghìn đồng/kg, thịt bò 240 nghìn đồng/kg và thịt gà 100 nghìn đồng/kg là giá bán hợp lí nhất.

**Chú ý.** Trong thực tế, thị trường hàng hóa rất phức tạp vì có nhiều mặt hàng. Khi đó, hệ phương trình cân bằng cung – cầu là một hệ phương trình nhiều lần, nhiều phương trình và do đó rất khó giải. Ngoài ra, giá cả của hàng hóa còn phụ thuộc vào nhiều yếu tố khác nữa, chứ không phải chỉ là quan hệ cung – cầu.

#### Luyện tập 2

Xét thị trường hải sản gồm ba mặt hàng là cua, tôm và cá. Kí hiệu $x$, $y$, $z$ lần lượt là giá 1 kg cua, 1 kg tôm và 1 kg cá (đơn vị nghỉn đông). Kí hiệu $Q_{S_1}$, $Q_{S_2}$ và $Q_{S_3}$ là lượng cua, tôm và cá mà người bán bằng lòng bán với giá $x$, $y$ và $z$. Kí hiệu $Q_{D_1}$, $Q_{D_2}$ và $Q_{D_3}$ tương ứng là lượng cua, tôm và cá mà người mua bằng lòng mua với giá $x$, $y$ và $z$. Cụ thể các hàm này được cho bởi

$$
Q_{S_1} = -300 + x; \quad Q_{D_1} = 1300 - 3x + 4y - z;
$$

$$
Q_{S_2} = -450 + 3y; \quad Q_{D_2} = 1150 + 2x - 5y - z;
$$

$$
Q_{S_3} = -400 + 2z; \quad Q_{D_3} = 900 - 2x - 3y + 4z.
$$

Tím mức giá cua, tôm và cá mà người bán và người mua cùng hài lòng.

### BÀI TẬP

1.7. Cho hàm cung và hàm cầu của ba mặt hàng như sau:

$$
Q_{S_1} = -4 + x; \quad Q_{D_1} = 70 - x - 2y - 6z;
$$

$$
Q_{S_2} = -3 + y; \quad Q_{D_2} = 76 - 3x - y - 4z;
$$

$$
Q_{S_3} = -6 + 3z; \quad Q_{D_3} = 70 - 2x - 3y - 2z.
$$

Hãy xác định giá cân bằng cung – cầu của ba mặt hàng.

1.8. Em Hà so sánh tuổi của mình với chị Mai và anh Nam. Tuổi của anh Nam gấp ba lần tuổi của em Hà. Cách đây bày năm tuổi của chị Mai bằng nửa số tuổi của anh Nam. Ba năm nửa tuổi của anh Nam bằng tổng số tuổi của chị Mai và em Hà. Hỏi tuổi của mỗi người là bao nhiêu?

1.9. Bác Việt có 330 740 nghìn đồng, bác chia số tiền này thành ba phần và đem đầu tư vào ba hình thức: Phần thứ nhất bác đầu tư vào chứng khoán với lãi thu được 4% một năm; phần thứ hai bác mua vàng thu lãi 5% một năm và phần thứ ba bác gửi tiết kiệm với lãi suất 6% một năm. Sau một năm, kể cả gốc và lãi bác thu được ba món tiền bằng nhau. Hỏi tổng số tiền cả gốc và lãi bác thu được sau một năm là bao nhiêu?

1.10. Một tuyển cáp treo có ba loại vé sau đây: vé đi lên giá 250 nghìn đồng; vé đi xuống giá 200 nghìn đồng và vé hai chiều giá 400 nghìn đồng. Một ngày nhà ga cáp treo thu được tổng số tiền là 251 triệu đồng. Tím số vé bán ra mỗi loại, biết rằng nhân viên quản lí cáp treo đếm được 680 lượt người đi lên và 520 lượt người đi xuống.

1.11. Ba lớp 10A, 10B, 10C của một trường trung học phổ thông gồm 128 em cùng tham gia lao động trồng cây. Tính trung bình, mỗi em lớp 10A trồng được 3 cây xoan và 4 cây bạch đàn; mỗi em lớp 10B trồng được 2 cây xoan và 5 cây bạch đàn; mỗi em lớp 10C trồng được 6 cây xoan. Cả ba lớp trồng được tổng cộng 476 cây xoan và 375 cây bạch đàn. Hỏi mỗi lớp có bao nhiêu em?

1.12. Cân bằng phương trình phản ứng hoá học đốt cháy methane trong oxygen

$$
\mathrm{CH_4} + \mathrm{O_2} \rightarrow \mathrm{CO_2} + \mathrm{H_2O}.
$$

1.13. Cho đoạn mạch như Hình 1.2. Gọi $l$ là cường độ dòng điện của mạch chính, $l_1$, $l_2$ và $l_3$ là cường độ dòng điện mạch rẽ. Cho biết $R_1 = 6\,\Omega$, $R_2 = 8\,\Omega$, $l = 3\,\text{A}$ và $l_3 = 2\,\text{A}$. Tính điện trở $R_3$ và hiệu điện thế $U$ giữa hai đầu đoạn mạch.

**Hình 1.2**

1.14. Mỗi giai đoạn phát triển của thực vật cần phân bón với tỉ lệ N, P, K nhất định. Bác An làm vườn muốn bón phân cho một cây cảnh có tỉ lệ N : P : K cân bằng nhau. Bác An có ba bao phân bón:

Bao 1 có tỉ lệ N : P : K là 12 : 7 : 12.

Bao 2 có tỉ lệ N : P : K là 6 : 30 : 25.

Bao 3 có tỉ lệ N : P : K là 30 : 16 : 11.

Hỏi phải trộn ba loại phân bón trên với tỉ lệ bao nhiêu để có hỗn hợp phân bón với tỉ lệ N : P : K là 15 : 15 : 15?

Chú ý rằng trên mỗi bao phân người ta thường viết một tỉ lệ N : P : K nhất định. Chẳng hạn trên bao phân 1 ghi tỉ lệ N : P : K là 12 : 7 : 12 nghĩa là hàm lượng đạm N (nitơ) chiếm 12%, làn P (tức là P₂O₅) chiếm 7% và kali K (tức là K₂O) chiếm 12%, còn các loại khác chiếm 100% – (12% + 7% + 12%) = 69%.

---

> **Em có biết?**
>
> Wassily Leontief (1906 – 1999) là nhà kinh tế học người Mỹ, gốc Nga. Ông đã đóng góp một số lí thuyết sâu sắc cho kinh tế học, trong đó mô hình kinh tế Leontief đưa ông đến với giải thưởng Nobel năm 1973. Mô hình kinh tế Leontief biểu thị sự phụ thuộc giữa các ngành sản xuất trong một nền kinh tế bởi một hệ phương trình bậc nhất: Xét một nền kinh tế gồm n ngành sản xuất hàng hoá N₁, N₂, ..., Nₙ. Để sản xuất, mỗi ngành cần tiêu thụ hàng hoá của bản thân ngành mình và các ngành khác của nền kinh tế đó. Giả sử để sản xuất ra một đơn vị hàng hoá, ngành Nᵢ cần tiêu thụ aᵢ đơn vị hàng hoá của ngành Nᵢ(i, j ∈ {1, 2, ..., n}). Vấn đề đặt ra là tính số đơn vị hàng hoá mà mỗi ngành trên cần sản xuất để sau tiêu thụ do sản xuất, ngành Nᵢ(i ∈ {1, ..., n}) có thể xuất ra ngoài nền kinh tế nói trên bᵢ đơn vị hàng hoá.
>
> Gọi $x_1, \ldots, x_n$ tương ứng là số đơn vị hàng hóa mà các ngành $N_1, \ldots, N_n$ cần sản xuất. Để sản xuất $x_i$ đơn vị hàng hóa, ngành $N_j$ cần tiêu thụ $a_{ij}x_i$ đơn vị hàng hóa của ngành $N_j$. Do đó, sau tiêu thụ do sản xuất, số đơn vị hàng hóa ngành $N_j$ còn lại là $x_i - a_{i1}x_1 - \cdots - a_{in}x_n$.
>
> Sau tiêu thụ do sản xuất, ngành $N_j$ còn $b_j$ đơn vị hàng hóa nên ta có hệ phương trình (với $n$ ẩn là $x_1, \ldots, x_n$):
>
> $$\left\{ \begin{array}{l} x_1 - a_{11}x_1 - a_{12}x_2 - \cdots - a_{1n}x_n = b_1 \\ \vdots \\ x_n - a_{n1}x_1 - a_{n2}x_2 - \cdots - a_{nn}x_n = b_n \end{array} \right. \text{ hay là } \left\{ \begin{array}{l} (1 - a_{11})x_1 - a_{12}x_2 - \cdots - a_{1n}x_n = b_1 \\ \vdots \\ -a_{n1}x_1 - a_{n2}x_2 - \cdots + (1 - a_{nn})x_n = b_n. \end{array} \right. $$
>
> Trong trường hợp $n = 3$, hệ trên sẽ trở thành hệ phương trình bậc nhất ba ẩn.
>
> Trong Bài 1, em đã được học phương pháp Gauss để giải hệ ba phương trình bậc nhất ba ẩn. Phương pháp Gauss còn được áp dụng cho hệ phương trình bậc nhất $n$ ẩn, do đó hệ phương trình gắn với mô hình kinh tế Leontief là hoàn toàn có thể giải quyết được.
>
> (Theo sách: Wassily Leontief (1986), Input-output Economics, Oxford University Press).

## BÀI TẬP CUỐI CHUYÊN ĐỀ 1

1.15. Giải các hệ phương trình sau:

a) $\left\{ \begin{array}{l} x + y + z = 6 \\ x + 2y + 3z = 14 \\ 3x - 2y - z = -4; \end{array} \right.$

b) $\left\{ \begin{array}{l} 2x - 2y + z = 6 \\ 3x + 2y + 5z = 7 \\ 7x + 3y - 6z = 1; \end{array} \right.$

c) $\left\{ \begin{array}{l} 2x + y - 6z = 1 \\ 3x + 2y - 5z = 5 \\ 7x + 4y - 17z = 7; \end{array} \right.$

d) $\left\{ \begin{array}{l} 5x + 2y - 7z = 6 \\ 2x + 3y + 2z = 7 \\ 9x + 8y - 3z = 1. \end{array} \right.$

1.16. Tìm các số thực $A$, $B$ và $C$ thoả mãn

$$
\frac{1}{x^3 + 1} = \frac{A}{x + 1} + \frac{Bx + C}{x^2 - x + 1}.
$$

1.17. Tìm parabol $y = ax^2 + bx + c$ trong mỗi trường hợp sau:

a) Parabol đi qua ba điểm $A(2; -1)$, $B(4; 3)$ và $C(-1; 8)$;

b) Parabol nhận đường thẳng $x = \frac{5}{2}$ làm trục đối xứng và đi qua hai điểm $M(1; 0)$, $N(5; -4)$.

1.18. Trong mặt phẳng toạ độ, viết phương trình đường tròn đi qua ba điểm $A(0; 1)$, $B(2; 3)$ và $C(4; 1)$.

1.19. Một đoàn xe chở 255 tấn gạo tiếp tế cho đồng bào vùng bị lũ lụt. Đoàn xe có 36 chiếc gồm ba loại: xe chở 5 tấn, xe chở 7 tấn và xe chở 10 tấn. Biết rằng tổng số hai loại xe chở 5 tấn và chở 7 tấn nhiều gấp ba lần số xe chở 10 tấn. Hỏi mỗi loại xe có bao nhiêu chiếc?

1.20. Bác An là chủ cửa hàng kinh doanh cà phê cho những người sành cà phê. Bác có ba loại cà phê nổi tiếng của Việt Nam: Arabica, Robusta và Moka với giá bán lần lượt là 320 nghìn đồng/kg, 280 nghìn đồng/kg và 260 nghìn đồng/kg. Bác muốn trộn ba loại cà phê này để được một hỗn hợp cà phê, sau đó đóng thành các gói 1 kg, bán với giá 300 nghìn đồng/kg và lượng cà phê Moka gấp đôi lượng cà phê Robusta trong mỗi gói. Hỏi bác cần trộn ba loại cà phê này theo tỉ lệ nào?

1.21. Bác Việt có 12 ha đất canh tác để trồng ba loại cây: ngô, khoai tây và đậu tương. Chi phí trồng 1 ha ngô là 4 triệu đồng, 1 ha khoai tây là 3 triệu đồng và 1 ha đậu tương là 4,5 triệu đồng. Do nhu cầu thị trường, bác đã trồng khoai tây trên phần diện tích gấp đôi diện tích trồng ngô. Tổng chi phí trồng ba loại cây trên là 45,25 triệu đồng. Hỏi diện tích trồng mỗi loại cây là bao nhiêu?

1.22. Cân bằng phương trình phản ứng hóa học sau

$$
\mathrm{FeS}_2 + \mathrm{O}_2 \rightarrow \mathrm{Fe}_2\mathrm{O}_3 + \mathrm{SO}_2.
$$

1.23. Bạn Mai có ba lọ dung dịch chứa một loại acid. Dung dịch A chứa 10%, dung dịch B chứa 30% và dung dịch C chứa 50% acid. Bạn Mai lấy từ mỗi lọ một lượng dung dịch và hoá với nhau để có 50 g hỗn hợp chứa 32% acid này, và lượng dung dịch loại C lấy nhiều gấp đôi dung dịch loại A. Tình lượng dung dịch mỗi loại bạn Mai đã lấy.

1.24. Cho đoạn mạch như Hình 1.3. Biết $R_1 = 36\ \Omega$, $R_2 = 45\ \Omega$, $I_3 = 1,5\ \mathrm{A}$ là cường độ dòng điện trong mạch chính và hiệu điện thế giữa hai đầu đoạn mạch $U = 60\ \mathrm{V}$. Gọi $I_1$ và $I_2$ là cường độ dòng điện mạch rẽ. Tình $I_1$, $I_2$ và $R_3$.

1.25. Giải bài toán dân gian sau:

- Em đi chợ phiên
- Anh gửi một tiền
- Cam, thanh yên, quýt
- Không nhiều thì ít
- Mua đủ một trăm
- Cam ba đồng một
- Quýt một đồng năm
- Thanh yên tươi tốt
- Năm đồng một trái.

Hỏi mỗi thứ mua bao nhiêu trái, biết một tiền bằng 60 đồng?

1.26. Một con ngựa giá 204 đồng (đơn vị tiền cổ). Có ba người muốn mua nhưng mỗi người không đủ tiền mua.

Người thứ nhất nói với hai người kia: “Mỗi anh cho tôi vay một nửa số tiền của mình thì tôi đủ tiền mua ngựa”;

Người thứ hai nói: “Mỗi anh cho tôi vay một phần ba số tiền của mình, tôi sẽ mua được ngựa”;

Người thứ ba lại nói: “Chỉ cần mỗi anh cho tôi vay một phần tư số tiền của mình thì con ngựa sẽ là của tôi”.

Hỏi mỗi người có bao nhiêu tiền?

# CHUYÊN ĐỀ 2 PHƯƠNG PHÁP QUY NẠP TOÁN HỌC. NHỊ THỨC NEWTON

Chuyên đề này giới thiệu phương pháp quy nạp toán học (một phương pháp hiệu quả để chứng minh những mệnh đề toán học phụ thuộc số tự nhiên $n$) và công thức nhị thức Newton trong trường hợp tổng quát, cũng như những ứng dụng phong phú của chúng.

## Bài 3 PHƯƠNG PHÁP QUY NẠP TOÁN HỌC

**Thuật ngữ**
- Mệnh đề toán học
- Phương pháp quy nạp toán học

**Kiến thức, kĩ năng**
- Mô tả các bước chứng minh tính đúng đắn của một mệnh đề toán học bằng phương pháp quy nạp toán học.
- Chứng minh tính đúng đắn của một mệnh đề toán học bằng phương pháp quy nạp toán học.
- Vận dụng phương pháp quy nạp để giải quyết một số vấn đề thực tiễn.

Trong toán học ta thường phải chứng minh những mệnh đề phụ thuộc vào số tự nhiên $n$. Phương pháp quy nạp toán học là một trong những phương pháp rất hiệu quả để chứng minh những mệnh đề như vậy.

### 1. PHƯƠNG PHÁP QUY NẠP TOÁN HỌC

#### HĐ1. Hãy quan sát các đẳng thức sau:

$$
\begin{array}{l}
1 = 1^{2} \\
1 + 3 = 4 = 2^{2} \\
1 + 3 + 5 = 9 = 3^{2} \\
1 + 3 + 5 + 7 = 16 = 4^{2} \\
1 + 3 + 5 + 7 + 9 = 25 = 5^{2} \\
\end{array}
$$

Có nhận xét gì về các số ở về trái và ở về phải của các đẳng thức trên? Từ đó hãy dự đoán công thức tinh tổng của $n$ số lẻ đầu tiên

$$
1 + 3 + 5 + \dots + (2n - 1).
$$

#### HĐ2. Xét đa thức $p(n) = n^2 - n + 41$.

a) Hãy tính $p(1)$, $p(2)$, $p(3)$, $p(4)$, $p(5)$ và chứng tỏ rằng các kết quả nhận được đều là số nguyên tố.

b) Hãy đưa ra một dự đoán cho $p(n)$ trong trường hợp tổng quát.

**Chú ý.** Khẳng định $p(n)$ là số nguyên tố với mọi số tự nhiên $n \geq 1$ là một khẳng định sai. Mặc dù khẳng định này đúng với $n = 1, 2, \ldots, 40$, nhưng nó lại sai khi $n = 41$. Thật vậy, với $n = 41$ ta có $p(41) = 41^2$ là hợp số (vì nó chia hết cho 41).

**Nhận xét.** Để khẳng định một **mệnh đề toán học** phụ thuộc số tự nhiên $n$ là đúng, ta cần phải chứng minh dù đã kiểm nghiệm nó với bao nhiêu giá trị $n$ đi nữa.

Để chứng minh tinh đúng đắn của những **mệnh đề phụ thuộc** vào số tự nhiên $n \in \mathbb{N}^*$, ta không thể thử trực tiếp với mọi số tự nhiên $n \in \mathbb{N}^*$. Tuy nhiên, ta có thể tiến hành như sau:

1. Trước hết ta kiểm tra rằng mệnh đề là đúng với $n = 1$.
2. Ta chứng minh rằng: từ giả thiết mệnh đề đúng với số tự nhiên $n = k \geq 1$, suy ra nó cũng đúng với $n = k + 1$.

Như thế mệnh đề là đúng với mọi số tự nhiên $n \in \mathbb{N}^*$.

> Phương pháp quy nạp toán học đôi khi được minh hoạ mô phỏng gắn liền với tác dụng tuần tự của hiệu ứng domino: Nếu
>
> - Quân domino đầu tiên bị đổ;
> - Mỗi quân domino đổ kéo theo quân domino kế tiếp bị đổ;
>
> thì tất cả các quân domino sẽ bị đổ.

Phương pháp lập luận trên đây gọi là phương pháp quy nạp toán học (thường gọi tắt là phương pháp quy nạp). 

Chứng minh một mệnh để toán học phụ thuộc $n \in \mathbb{N}^*$, đúng với mọi $n \in \mathbb{N}^*$, bằng phương pháp quy nạp toán học, gồm hai bước sau:

- Bước 1. Kiểm tra rằng mệnh đề là đúng với $n = 1$.
- Bước 2. Giả thiết mệnh đề đúng với số tự nhiên $n = k \geq 1$ (gọi là giả thiết quy nạp), chứng minh rằng mệnh đề đúng với $n = k + 1$. Kết luận.

#### Ví dụ 1. Chứng minh rằng với mọi số tự nhiên $n \geq 1$, ta có

$$
1 + 3 + 5 + 7 + \cdots + (2n - 1) = n^2. \tag{1}
$$

Dùng phương pháp quy nạp để chứng minh công thức thu được sau dự đoán ở HĐ1.

**Giải**

Ta chứng minh bằng quy nạp theo $n$.

*Bước 1.* Với $n = 1$ ta có $1 = 1^2$.

Như vậy (1) đúng cho trường hợp $n = 1$.

*Bước 2.* Giả sử (1) đúng với $n = k$, tức là ta có

$$
1 + 3 + 5 + 7 + \cdots + (2k - 1) = k^2. \quad \rightarrow \text{Giả thiết quy nạp}
$$

Ta sẽ chứng minh rằng (1) cũng đúng với $n = k + 1$, nghĩa là ta sẽ chứng minh

$$
1 + 3 + 5 + 7 + \cdots + (2k - 1) + [2(k + 1) - 1] = (k + 1)^2.
$$

Thật vậy, ta có

$$
\begin{array}{l}
1 + 3 + 5 + 7 + \cdots + (2k - 1) + [2(k + 1) - 1] = [1 + 3 + 5 + 7 + \cdots + (2k - 1)] + (2k + 1) \\
= k^2 + (2k + 1) \quad \rightarrow \text{Theo giả thiết quy nạp} \\
= k^2 + 2k + 1 = (k + 1)^2.
\end{array}
$$

Vậy (1) đúng với mọi số tự nhiên $n \geq 1$.

#### Luyện tập 1. 
Chứng minh rằng với mọi số tự nhiên $n \geq 1$, ta có

$$
1 + 2 + 3 + \cdots + n = \frac{n(n + 1)}{2}.
$$

**Chú ý.** Nếu phải chứng minh một mệnh đề đúng với mọi số tự nhiên $n \geq p$ ($p$ là một số tự nhiên nào đó) thì:

- Bước 1. Kiểm tra mệnh đề là đúng với $n = p$.
- Bước 2. Giả thiết mệnh đề đúng với số tự nhiên $n = k \geq p$ và chứng minh mệnh đề đúng với $n = k + 1$. Kết luận.

#### Ví dụ 2. 
Chứng minh rằng với mọi số tự nhiên $n \geq 2$, ta có đẳng thức

$$
\left(1 - \frac{1}{2^2}\right) \left(1 - \frac{1}{3^2}\right) \cdots \left(1 - \frac{1}{n^2}\right) = \frac{n + 1}{2n}. \tag{2}
$$

**Giải.** Ta chứng minh (2) bằng quy nạp theo $n$.

- Với $n = 2$, ta có $1 - \frac{1}{2^2} = \frac{3}{4} = \frac{2 + 1}{2 \cdot 2}$. Như vậy (2) đúng với $n = 2$.

- Giả sử (2) đúng với $n = k$ ($k \geq 2$), tức là

$$
\left(1 - \frac{1}{2^2}\right) \left(1 - \frac{1}{3^2}\right) \cdots \left(1 - \frac{1}{k^2}\right) = \frac{k + 1}{2k}.
$$

Ta sẽ chứng minh rằng công thức trên cũng đúng với $n = k + 1$, nghĩa là ta sẽ chứng minh

$$
\left(1 - \frac{1}{2^2}\right) \left(1 - \frac{1}{3^2}\right) \cdots \left(1 - \frac{1}{k^2}\right) \left(1 - \frac{1}{(k + 1)^2}\right) = \frac{k + 2}{2(k + 1)}.
$$

Thật vậy, sử dụng giả thiết quy nạp, ta có

$$
\begin{aligned}
\left(1 - \frac{1}{2^2}\right) \left(1 - \frac{1}{3^2}\right) \cdots \left(1 - \frac{1}{k^2}\right) \left(1 - \frac{1}{(k + 1)^2}\right) \\
= \frac{k + 1}{2k} \cdot \left(1 - \frac{1}{(k + 1)^2}\right) = \frac{k + 1}{2k} \cdot \frac{(k + 1)^2 - 1}{(k + 1)^2} \\
= \frac{k + 1}{2k} \cdot \frac{(k + 1 - 1)(k + 1 + 1)}{(k + 1)^2} = \frac{k + 2}{2(k + 1)}.
\end{aligned}
$$

Vậy (2) đúng với mọi số tự nhiên $n \geq 2$.

**Luyện tập 2.** Chứng minh rằng với mọi số tự nhiên $n \geq 2$, ta có đẳng thức

$$
a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \ldots + ab^{n-2} + b^{n-1}).
$$

$$
\begin{aligned}
a^{k+1} - b^{k+1} = a^{k+1} - a^kb + a^kb - b^{k+1} \\
= a^k(a - b) + b(a^k - b^k).
\end{aligned}
$$

### 2. MỘT SỐ ỨNG DỤNG KHÁC CỦA PHƯƠNG PHÁP QUY NẠP TOÁN HỌC

Trong mục 1 ta đã sử dụng phương pháp quy nạp toán học để chứng minh một số đẳng thức phụ thuộc số tự nhiên $n$. Dưới đây ta xét một số ứng dụng khác của phương pháp quy nạp.

#### Ví dụ 3. Chứng minh rằng với mọi số tự nhiên $n$,

$$
n(n + 1)(n + 2) \text{ luôn chia hết cho } 3. \tag{3}
$$

**Giải**

Ta chứng minh (3) bằng quy nạp theo $n$.

- Với $n = 0$ ta có $0 \cdot (0 + 1) \cdot (0 + 2) = 0 : 3$.

Vậy (3) đúng với $n = 0$.

- Già sử (3) đã cho đúng với $n = k$, tức là

$$
k(k + 1)(k + 2) : 3,
$$

ta cần chứng minh (3) đúng với $n = k + 1$.

Từ giả thiết quy nạp ta suy ra $k(k + 1)(k + 2) = 3m$, với $m$ là số tự nhiên nào đó.Khi đó ta có

$$
\begin{array}{l}
(k + 1)(k + 2)(k + 3) = (k + 3)(k + 1)(k + 2) = k(k + 1)(k + 2) + 3(k + 1)(k + 2) \\
= 3m + 3(k + 1)(k + 2) = 3[m + (k + 1)(k + 2)] \quad \text{: } 3.
\end{array}
$$

Vậy (3) đúng với mọi số tự nhiên $n$.

**Nhận xét.** Vì trong hai số tự nhiên liên tiếp luôn có một số chặn nên từ kết quả của Ví dụ 3 suy ra: Tích của ba số tự nhiên liên tiếp luôn chia hết cho 6.

#### Ví dụ 4. Chứng minh rằng với mọi số tự nhiên $n \geq 3$, ta có

$$
2^n \gt 2n + 1. \tag{4}
$$

**Giải**

Ta chứng minh bất đẳng thức (4) bằng quy nạp theo $n$, với $n \geq 3$.

- Với $n = 3$ ta có $2^3 \gt 7 = 2 \cdot 3 + 1$.

Vậy (4) đúng với $n = 3$.

- Giả sử (4) đúng với $n = k \geq 3$, tức là ta có $2^k \gt 2k + 1$.

Ta cần chứng minh (4) đúng với $n = k + 1$, tức là chứng minh $2^{k+1} \gt 2(k + 1) + 1 = 2k + 3$.

Thật vậy, theo giả thiết quy nạp, ta có

$$
2^{k+1} = 2 \cdot 2^k \gt 2 \cdot (2k + 1) = 4k + 2 = 2k + 2(k + 1) \gt 2k + 3 \text{ do } k \geq 3.
$$

Vậy bất đẳng thức (4) đúng với mọi số tự nhiên $n \geq 3$.

#### Ví dụ 5.

Sử dụng phương pháp quy nạp toán học, chứng minh rằng tổng các góc trong của một đa giác $n$ cạnh $(n \geq 3)$ là $(n - 2) \cdot 180^\circ$.

**Giải.** Ta chứng minh khẳng định trên bằng quy nạp theo $n$, với $n \geq 3$.

- Với $n = 3$, ta có tổng ba góc của một tam giác bằng $180^\circ = (3 - 2) \cdot 180^\circ$.

Vậy khẳng định đúng với $n = 3$.

- Giả sử khẳng định đúng với $n = k \geq 3$, ta sẽ chứng minh nó đúng với $n = k + 1$.

Thật vậy, xét đa giác $k + 1$ cạnh $A_1A_2 \ldots A_kA_{k+1}$, nối hai đỉnh $A_1$ và $A_k$ ta được đa giác $k$ cạnh $A_1A_2 \ldots A_k$. Theo giả thiết quy nạp, tổng các góc của đa giác $k$ cạnh này bằng $(k - 2) \cdot 180^\circ$.

Dễ thấy tổng các góc của đa giác $A_1A_2 \ldots A_kA_{k+1}$ bằng tổng các góc của đa giác $A_1A_2 \ldots A_k$ cộng với tổng các góc của tam giác $A_{k+1}A_kA_1$, tức là bằng

$$
(k - 2) \cdot 180^\circ + 180^\circ = (k - 1) \cdot 180^\circ = [(k + 1) - 2] \cdot 180^\circ.
$$

Vậy khẳng định đúng với mọi đa giác $n$ cạnh, $n \geq 3$.

#### Vận dụng (Công thức lãi kép)

Lãi suất gửi tiết kiệm trong ngân hàng thường được tính theo thể thức lãi kép theo định kỉ. Theo thể thức này, nếu đến kỉ hạn người gửi không rút lãi ra thì tiền lãi được tính vào vốn của kỉ kế tiếp. Giả sử một người gửi số tiền A với lãi suất r không đổi trong mỗi kỉ.

a) Tính tổng số tiền (cả vốn lẫn lãi) $T_1$, $T_2$, $T_3$ mà người đó nhận được sau kỉ thứ 1, sau kỉ thứ 2 và sau kỉ thứ 3.

b) Dự đoán công thức tính tổng số tiền (cả vốn lẫn lãi) $T_n$ mà người đó thu được sau $n$ kỉ. Hãy chứng minh công thức nhận được đó bằng quy nạp.

### BÀI TẬP

2.1. Sử dụng phương pháp quy nạp toán học, chứng minh các đẳng thức sau đúng với mọi số tự nhiên $n \geq 1$.

a) $2 + 4 + 6 + \ldots + 2n = n(n + 1)$;

b) $1^2 + 2^2 + 3^2 + \ldots + n^2 = \frac{n(n + 1)(2n + 1)}{6}$.

2.2. Mỗi khẳng định sau là đúng hay sai? Nếu em nghĩ là nó đúng, hãy chứng minh nó. Nếu em nghĩ là nó sai, hãy đưa ra một phần ví dụ.

a) $p(n) = n^2 - n + 11$ là số nguyên tố với mọi số tự nhiên $n$;

b) $n^2 \gt n$ với mọi số tự nhiên $n \geq 2$.

2.3. Chứng minh rằng $n^3 - n + 3$ chia hết cho 3 với mọi số tự nhiên $n \geq 1$.

2.4. Chứng minh rằng $n^2 - n + 41$ là số lẻ với mọi số nguyên dương $n$.

2.5. Chứng minh rằng nếu $x \gt -1$ thì $(1 + x)^n \geq 1 + nx$ với mọi số tự nhiên $n$.

2.6. Cho tổng $S_n = \frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \ldots + \frac{1}{n(n + 1)}$.

a) Tính $S_1, S_2, S_3$.

b) Dự đoán công thức tính tổng $S_n$ và chứng minh bằng quy nạp.

2.7. Sử dụng phương pháp quy nạp toán học, chứng minh rằng số đường chéo của một đa giác $n$ cạnh $(n \geq 4)$ là $\frac{n(n - 3)}{2}$.

2.8. Ta sẽ “lập luận” bằng quy nạp toán học để chỉ ra rằng: “Mọi con mèo đều có cùng màu”. Ta gọi $P(n)$ với $n$ nguyên dương là mệnh đề sau: “Mọi con mèo trong một đàn gốm $n$ con đều có cùng màu”.

Bước 1. Với $n = 1$ thì mệnh đề $P(1)$ là “Mọi con mèo trong một đàn gốm 1 con đều có cùng màu”. Hiển nhiên mệnh đề này là đúng!

Bước 2. Giả sử $P(k)$ đúng với một số nguyên dương $k$ nào đó. Xét một đàn mèo gốm $k + 1$ con. Gọi chúng là $M_1, M_2, \ldots, M_{k+1}$. Bỏ con mèo $M_{k+1}$ ra khỏi đàn, ta nhận được một đàn mèo gốm $k$ con là $M_1, M_2, \ldots, M_k$. Theo giả thiết quy nạp, các con mèo cócùng màu. Bây giờ, thay vì bỏ con mèo $M_{k+1}$, ta bỏ con mèo $M_1$ để có đàn mèo gồm $k$ con là $M_2, M_3, \ldots, M_{k+1}$. Vẫn theo giả thiết quy nạp thì các con mèo $M_2, M_3, \ldots, M_{k+1}$ có cùng màu. Cuối cùng, đưa con mèo $M_1$ trở lại đàn để có đàn mèo ban đầu. Theo các lập luận trên: các con mèo $M_1, M_2, \ldots, M_k$ có cùng màu và các con mèo $M_2, M_3, \ldots, M_{k+1}$ có cùng màu. Từ đó suy ra tất cả các con mèo $M_1, M_2, \ldots, M_{k+1}$ đều có cùng màu.

Vậy, theo nguyên lí quy nạp thì $P(n)$ đúng với mọi số nguyên dương $n$. Nói riêng, nếu gọi $N$ là số mèo hiện tại trên Trái Đất thì việc $P(N)$ đúng cho thấy tất cả các con mèo (trên Trái Đất) đều có cùng màu!

Tất nhiên là ta có thể tìm được các con mèo khác màu nhau! Theo em thì “lập luận” trên đây sai ở chỗ nào?

### Em có biết?

- Phương pháp lập luận bằng quy nạp không phải là một phát minh của một cá nhân tại một thời điểm cố định nào. Người ta cho rằng các nhà toán học Hy Lạp đã biết tới nguyên lí quy nạp, nhưng không thật sự rõ ràng.
- Lập luận bằng quy nạp lần đầu tiên xuất hiện một cách tường minh trong cuốn sách *Arithmeticorum Libri Duo* năm 1575 của nhà toán học và thiên văn học người Ý Francesco Maurolico (1494 – 1575).
- Nhà toán học người Anh John Wallis (1616 – 1703) được coi là người đầu tiên sử dụng thuật ngữ *quy nạp*.

## Bài 4 NHỊ THỨC NEWTON

**Thuật ngữ**
- Tam giác Pascal
- Hệ số
- Nhị thức Newton

**Kiến thức, kĩ năng**
- Xác định các hệ số trong khai triển nhị thức Newton thông qua tam giác Pascal.
- Khai triển nhị thức Newton $(a + b)^n$ bằng cách sử dụng tam giác Pascal hoặc sử dụng công thức tổ hợp.
- Xác định hệ số của $x^k$ trong khai triển $(ax + b)^n$ thành đa thức.

Quan sát các khai triển nhị thức Newton sau:

$$
\begin{array}{l}
(a + b)^0 = 1 \\
(a + b)^1 = 1a + 1b \\
(a + b)^2 = 1a^2 + 2ab + 1b^2 \\
(a + b)^3 = 1a^3 + 3a^2b + 3ab^2 + 1b^3 \\
(a + b)^4 = 1a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + 1b^4 \\
(a + b)^5 = 1a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + 1b^5 \\
\end{array}
$$


$$1 $$
$$1  \quad 1 $$
$$1  \quad 2  \quad 1 $$
$$1  \quad 3  \quad 3  \quad 1 $$
$$1  \quad 4  \quad 6  \quad 4  \quad 1 $$
$$1  \quad 5  \quad 10  \quad 10  \quad 5  \quad 1 $$


Các hệ số trong khai triển của $(a + b)^n$ tạo thành tam giác như ở hình trên. Có thể xác định được một hàng bất kì của tam giác này và do đó tính được các hệ số hay không?

### 1. TAM GIÁC PASCAL

#### HĐ1. Khai triển $(a + b)^n$, $n \in \{1; 2; 3; 4; 5\}$

Trong Bài 25 SGK Toán 10 (bộ sách Kết nối tri thức với cuộc sống), ta đã biết:

$$
\begin{array}{l}
(a + b)^1 = a + b \\
(a + b)^2 = a^2 + 2ab + b^2 \\
(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 \\
(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4 \\
(a + b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5 \\
\end{array}
$$

Với $n \in \{1; 2; 3; 4; 5\}$, trong khai triển của mỗi nhị thức $(a + b)^n$:

a) Có bao nhiêu số hạng?

b) Tổng số mũ của $a$ và $b$ trong mỗi số hạng bằng bao nhiêu?

c) Số mũ của $a$ và $b$ thay đổi thể nào khi chuyển từ số hạng này đến số hạng tiếp theo, tính từ trái sang phải?Trong khai triển của $(a + b)^n$ (với $n = 1, 2, 3, 4, 5$):

1. Có $n + 1$ số hạng, số hạng đầu tiên là $a^n$ và số hạng cuối cùng là $b^n$.
2. Tổng số mũ của $a$ và $b$ trong mỗi số hạng đều bằng $n$.
3. Số mũ của $a$ giảm 1 đơn vị và số mũ của $b$ tăng 1 đơn vị khi chuyển từ số hạng này đến số hạng tiếp theo, tính từ trái sang phải.

Từ những quan sát này ta có thể dự đoán, chẳng hạn:

$$
(a + b)^6 = a^6 + ?a^5b + ?a^4b^2 + ?a^3b^3 + ?a^2b^4 + ?ab^5 + b^6.
$$

Ở đây dấu “?” để chỉ các hệ số chưa biết. Để hoàn thành khai triển, ta cần xác định các hệ số này.

#### HĐ2. Tam giác Pascal

Viết các hệ số của khai triển $(a + b)^n$ với một số giá trị đầu tiên của $n$, trong bảng tam giác sau đây, gọi là tam giác Pascal:

Hàng đầu quy ước gọi là hàng 0. Hàng $n$ ứng với các hệ số trong khai triển nhị thức $(a + b)^n$.

> **Trong tam giác Pascal:**
> 
> Mọi số (khác 1) đều là tổng của hai số ở ngay phía trên nó.

Từ tính chất này ta có thể tìm bất kì hàng nào của tam giác Pascal từ hàng ở ngay phía trên nó. Chẳng hạn ta có thể tìm hàng 6 từ hàng 5 như sau:

$$
\begin{array}{l}
(a + b)^5 \\
(a + b)^6
\end{array}
$$

$$
1 \quad 5 \quad 10 \quad 10 \quad 5 \quad 1
$$

$$
1 \quad 6 \quad 15 \quad 20 \quad 15 \quad 6 \quad 1
$$

$$
 \rightarrow 1 + 5 = 6, 5 + 10 = 15, 10 + 10 = 20
$$

Tìm các hàng 7 và 8 của tam giác Pascal.

#### Ví dụ 1. Sử dụng tam giác Pascal viết khai triển của $(a + b)^6$.

**Giải**

Khai triển của $(a + b)^6$ có dạng

$$
(a + b)^6 = a^6 + ?a^5b + ?a^4b^2 + ?a^3b^3 + ?a^2b^4 + ?ab^5 + b^6.
$$

Các hệ số trong khai triển này là các hệ số ở hàng 6 của tam giác Pascal. Do đó ta có ngay

$$
(a + b)^6 = a^6 + 6a^5b + 15a^4b^2 + 20a^3b^3 + 15a^2b^4 + 6ab^5 + b^6.
$$34

#### Ví dụ 2. Sử dụng tam giác Pascal viết khai triển của $(3 - 2x)^5$.

**Giải**

Ta viết khai triển của $(a + b)^5$ rồi sau đó thay $a = 3$, $b = -2x$ vào khai triển nhận được.

Dựa vào hàng 5 của tam giác Pascal, ta có

$$
(a + b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5.
$$

Với $a = 3$, $b = -2x$, ta được

$$
\begin{array}{l}
(3 - 2x)^5 = 3^5 + 5 \cdot 3^4(-2x) + 10 \cdot 3^3(-2x)^2 + 10 \cdot 3^2(-2x)^3 + 5 \cdot 3(-2x)^4 + (-2x)^5 \\
= 243 - 810x + 1080x^2 - 720x^3 + 240x^4 - 32x^5.
\end{array}
$$

#### Luyện tập 1.

a) Sử dụng tam giác Pascal viết khai triển của $(a + b)^7$.

b) Sử dụng tam giác Pascal viết khai triển của $(2x - 1)^4$.

Dưới đây ta sẽ xây dựng công thức cho phép xác định trực tiếp hệ số bất kì trong khai triển $(a + b)^n$.

#### HĐ3. Tính chất của các số $C_n^k$

a) Quan sát ba dòng đầu, hoàn thành tiếp hai dòng cuối theo mẫu:

$$
\begin{array}{l}
(a + b)^1 = a + b = C_1^0a + C_1^1b \\
(a + b)^2 = a^2 + 2ab + b^2 = C_2^0a^2 + C_2^1ab + C_2^2b^2 \\
(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 = C_3^0a^3 + C_3^1a^2b + C_3^2ab^2 + C_3^3b^3 \\
(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4 = \ldots \\
(a + b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5 = \ldots \\
\end{array}
$$

Nhận xét rằng các hệ số khai triển của hai số hạng cách đều số hạng đầu và số hạng cuối luôn bằng nhau. Hãy so sánh, chẳng hạn, $C_4^1$ và $C_4^3$, $C_5^2$ và $C_5^3$. Từ đó hãy dự đoán hệ thức giữa $C_n^k$ và $C_n^{n-k}$ ($0 \leq k \leq n$).

b) Dựa vào kết quả của HĐ3a, ta có thể viết những hàng đầu của tam giác Pascal dưới dạng:

$$
\begin{array}{l}
(a + b)^0 \\
(a + b)^1 \\
(a + b)^2 \\
(a + b)^3 \\
(a + b)^4 \\
(a + b)^5 \\
\end{array}
$$

$$
C_0^0
$$

$$
C_1^0 \quad C_1^1
$$

$$
C_2^0 \quad C_2^1 \quad C_2^2
$$

$$
C_3^0 \quad C_3^1 \quad C_3^2 \quad C_3^3
$$

$$
C_4^0 \quad C_4^1 \quad C_4^2 \quad C_4^3 \quad C_4^4
$$

$$
C_5^0 \quad C_5^1 \quad C_5^2 \quad C_5^3 \quad C_5^4 \quad C_5^5
$$

Từ tính chất của tam giác Pascal, hãy so sánh $C_1^0 + C_1^1$ và $C_2^1$, $C_2^0 + C_2^1$ và $C_3^1$, ... Từ đó hãy dự đoán hệ thức giữa $C_{n-1}^{k-1} + C_{n-1}^k$ và $C_n^k$.Tính chất của các số $C_n^k$:

- $C_n^k = C_n^{n-k}$ ($0 \leq k \leq n$) (Tính chất đối xứng).
- $C_{n-1}^{k-1} + C_{n-1}^k = C_n^k$ ($1 \leq k \leq n$) (Hệ thức Pascal).

Hãy chứng minh các công thức trên bằng cách sử dụng công thức tinh số các tổ hợp.

### 2. CÔNG THỨC NHỊ THỨC NEWTON

#### HĐ4. Quan sát khai triển nhị thức của $(a + b)^n$ với $n \in \{1; 2; 3; 4; 5\}$ ở HĐ3, hãy dự đoán công thức khai triển trong trường hợp tổng quát.

$$
(a + b)^n = C_n^0 a^n + C_n^1 a^{n-1} b + \dots + C_n^{n-1} a b^{n-1} + C_n^n b^n. \tag{1}
$$

**Chứng minh**

Ta chứng minh (1) bằng quy nạp theo $n$.

- Khi $n = 1$, ta có

$$
(a + b)^1 = a + b = C_1^0 a + C_1^1 b.
$$

Vậy công thức (1) đúng khi $n = 1$.

- Với giả thiết (1) là đúng với $n = m$, tức là ta có

$$
(a + b)^m = C_m^0 a^m + C_m^1 a^{m-1} b + \dots + C_m^{m-1} a b^{m-1} + C_m^m b^m.
$$

Ta sẽ chứng minh rằng (1) cũng đúng khi $n = m + 1$, tức là

$$
(a + b)^{m+1} = C_{m+1}^0 a^{m+1} + C_{m+1}^1 a^m b + \dots + C_{m+1}^m a b^m + C_{m+1}^{m+1} b^{m+1}. \tag{2}
$$

Thật vậy, ta có

$$
\begin{aligned}
(a + b)^{m+1} &= (a + b)^m (a + b) \\
&= \left( C_m^0 a^m + C_m^1 a^{m-1} b + \dots + C_m^k a^{m-k} b^k + \dots + C_m^{m-1} a b^{m-1} + C_m^m b^m \right) (a + b) \\
&= \left( C_m^0 a^m + C_m^1 a^{m-1} b + \dots + C_m^k a^{m-k} b^k + \dots + C_m^{m-1} a b^{m-1} + C_m^m b^m \right) a + \\
&\quad + \left( C_m^0 a^m + C_m^1 a^{m-1} b + \dots + C_m^k a^{m-k} b^k + \dots + C_m^{m-1} a b^{m-1} + C_m^m b^m \right) b \\
&= C_m^0 a^{m+1} + \left( C_m^1 + C_m^0 \right) a^m b + \dots + \left( C_m^k + C_m^{k-1} \right) a^{m+1-k} b^k + \dots + \left( C_m^m + C_m^{m-1} \right) a b^m + C_m^m b^{m+1}.
\end{aligned}
$$

Vì $C_m^0 = 1 = C_{m+1}^0$, $C_m^m = 1 = C_{m+1}^{m+1}$, $C_m^k + C_m^{k-1} = C_{m+1}^k$, nên ta có (2).

Vậy công thức nhị thức Newton là đúng với với mọi số nguyên dương $n$.

**Chú ý.** Số hạng thứ $(k + 1)$ trong khai triển của $(a + b)^n$ thành dạng (1) là $T_{k+1} = C_n^k a^{n-k} b^k$.

#### Ví dụ 3. Viết khai triển nhị thức Newton $(a + b)^6$.

**Giải**

Ta có

$$
\begin{aligned}
(a + b)^6 &= C_6^0 a^6 + C_6^1 a^5 b + C_6^2 a^4 b^2 + C_6^3 a^3 b^3 + C_6^4 a^2 b^4 + C_6^5 a b^5 + C_6^6 b^6 \\
& = a^8 + 6 a^5 b + 15 a^4 b^2 + 20 a^3 b^3 + 15 a^2 b^4 + 6 a b^5 + b^6.
\end{aligned}
$$

Như vậy, ta tìm lại được kết quả của Ví dụ 1, nhưng bằng phương pháp khác.Chú ý. Vì $C_6^k = C_6^{6 - k}$ $(0 \leq k \leq 6)$ nên ta chỉ cần tính $C_6^0, C_6^1, C_6^2, C_6^3$ và dùng tính chất này để suy ra $C_6^4, C_6^5, C_6^6$.

#### Ví dụ 4. Khai triển biểu thức $(3x - 2)^4$.

**Giải**

Theo công thức nhị thức Newton, ta có

$$
\begin{aligned}
(3x - 2)^4 & = C_4^0 (3x)^4 + C_4^1 (3x)^3 (-2) + C_4^2 (3x)^2 (-2)^2 + C_4^3 (3x) (-2)^3 + C_4^4 (-2)^4 \\
& = 81x^4 - 216x^3 + 216x^2 - 96x + 16.
\end{aligned}
$$

#### Luyện tập 2. Khai triển $(x - 2y)^6$.

Số hạng chứa $x^k$ trong khai triển của $(ax + b)^n$ là $C_n^{n-k}(ax)^k b^{n-k}$ hay $C_n^{n-k}a^k b^{n-k}x^k$.

Do đó, hệ số của $x^k$ trong khai triển của $(ax + b)^n$ là $C_n^{n-k}a^k b^{n-k}$.

#### Ví dụ 5. Tìm hệ số của $x^4$ trong khai triển của $(x + 2)^{10}$.

**Giải.** Số hạng chứa $x^k$ trong khai triển của $(x + 2)^{10}$ là $C_{10}^{10 - k}x^k2^{10 - k}$.

Số hạng chứa $x^4$ ứng với $k = 4$, tức là số hạng $C_{10}^0 x^4 2^6$ hay $13440x^4$.

Vậy hệ số của $x^4$ trong khai triển của $(x + 2)^{10}$ là 13440.

#### Luyện tập 3. Tìm hệ số của $x^7$ trong khai triển thành đa thức của $(2 - 3x)^{10}$.

#### Ví dụ 6. Tìm số nguyên dương $n$ thoả mãn

$$
C_n^0 3^n + C_n^1 3^{n-1} + \dots + C_n^{n-1} 3 + C_n^n = 64.
$$

**Giải.** Nhận thấy về trái của đẳng thức trên có chứa các lũy thừa của 3 nên áp dụng khai triển nhị thức Newton cho $(x + 3)^n$ ta được

$$
(x + 3)^n = C_n^0 3^n + C_n^1 3^{n-1}x + \dots + C_n^{n-1} 3x^{n+1} + C_n^n x^n.
$$

Cho $x = 1$ ta được

$$
4^n = (1 + 3)^n = C_n^0 3^n + C_n^1 3^{n-1} + \dots + C_n^{n-1} 3 + C_n^n = 64 = 4^3.
$$

Vậy số nguyên dương cần tìm là $n = 3$.

#### Vận dụng (Số các tập con của tập hợp có $n$ phần tử)

a) Viết khai triển nhị thức Newton của $(1 + x)^n$.

b) Cho $x = 1$ trong khai triển ở câu a), viết đẳng thức nhận được. Giải thích ý nghĩa của đẳng thức này với lưu ý rằng $C_n^k (0 \leq k \leq n)$ chính là số tập con gồm $k$ phần tử của một tập hợp có $n$ phần tử.

c) Tương tự, cho $x = -1$ trong khai triển ở câu a), viết đẳng thức nhận được. Giải thích ý nghĩa của đẳng thức này.

### BÀI TẬP

2.9. Sử dụng tam giác Pascal, viết khai triển:

a) $(x - 1)^5$;
b) $(2x - 3y)^4$.

2.10. Viết khai triển theo nhị thức Newton:

a) $(x + y)^6$;
b) $(1 - 2x)^5$.

2.11. Tìm hệ số của $x^8$ trong khai triển của $(2x + 3)^{10}$.

2.12. Biết hệ số của $x^2$ trong khai triển của $(1 - 3x)^n$ là 90. Tìm $n$.

2.13. Từ khai triển biểu thức $(3x - 5)^4$ thành đa thức, hãy tính tổng các hệ số của đa thức nhận được.

2.14. Tìm hệ số của $x^5$ trong khai triển thành đa thức của biểu thức

$$
x(1 - 2x)^5 + x^2(1 + 3x)^{10}.
$$

2.15. Tính tổng sau đây:

$$
C_{2021}^0 - 2C_{2021}^1 + 2^2C_{2021}^2 - 2^3C_{2021}^3 + \dots - 2^{2021}C_{2021}^{2021}.
$$

2.16. Tìm số tự nhiên $n$ thoả mãn

$$
C_{2n}^0 + C_{2n}^2 + C_{2n}^4 + \dots + C_{2n}^{2n} = 2^{2021}.
$$

2.17. Tìm số nguyên dương $n$ sao cho

$$
C_n^0 + 2C_n^1 + 4C_n^2 + \dots + 2^nC_n^n = 243.
$$

2.18. Biết rằng $(2 + x)^{100} = a_0 + a_1x + a_2x^2 + \dots + a_{100}x^{100}$. Với giá trị nào của $k$ ($0 \leq k \leq 100$) thì $a_k$ lớn nhất?

### Em có biết?

- Tam giác Pascal được đặt tên theo nhà toán học người Pháp Blaise Pascal. Ông là người có công lớn trong việc mở ra hai lĩnh vực mới trong toán học là Hình học xạ ảnh và Lí thuyết xác suất.

Thật ra tam giác Pascal đã được nghiên cứu từ nhiều thế kỉ trước đó bởi các nhà toán học Ấn Độ, Ba Tư, Trung Hoa, Đức, Ý.

- Nhị thức Newton được đặt tên theo nhà bác học người Anh Isaac Newton. Ông được biết đến như một trong những nhà toán học vĩ đại nhất của mọi thời đại, đồng thời là một trong những nhà khoa học có ảnh hưởng nhất trong lịch sử khoa học.

Thật ra công thức nói tới được biết đến từ trước. Newton là người có công mở rộng công thức cho trường hợp $n$ là số thực!

## BÀI TẬP CUỐI CHUYÊN ĐỀ 2

2.19. Chứng minh rằng với mọi số tự nhiên $n \geq 1$, ta có

$$
2 \cdot 2^{1} + 3 \cdot 2^{2} + 4 \cdot 2^{3} + \dots + (n + 1) \cdot 2^{n} = n \cdot 2^{n+1}.
$$

2.20. Đặt $S_{n} = \frac{1}{1.3} + \frac{1}{3.5} + \ldots + \frac{1}{(2n - 1)(2n + 1)}$.

a) Tính $S_{1}, S_{2}, S_{3}$.

b) Dự đoán công thức tính tổng $S_{n}$ và chứng minh nó bằng quy nạp.

2.21. Chứng minh rằng với mọi số tự nhiên $n$, ta có $10^{2n-1} + 1$ chia hết cho 11.

2.22. Chứng minh rằng với mọi số tự nhiên $n \geq 2$, ta có

$$
5^{n} \geq 3^{n} + 4^{n}.
$$

2.23. a) Khai triển $(1 + x)^{10}$.

b) So sánh $(1, 1)^{10}$ và 2.

2.24. Tìm hệ số của $x^9$ trong khai triển thành đa thức của

$$
(2x - 3)^{11}.
$$

2.25. Khai triển đa thức $(1 + 2x)^{12}$ thành dạng

$$
a_{0} + a_{1}x + a_{2}x^{2} + \dots + a_{12}x^{12}.
$$

Tìm hệ số $a_{k}$ lớn nhất.

2.26. Chứng minh rằng

$$
C_{2n}^{0} + C_{2n}^{2} + C_{2n}^{3} + \dots + C_{2n}^{2n} = C_{2n}^{1} + C_{2n}^{3} + C_{2n}^{5} + \dots + C_{2n}^{2n-1}.
$$

Áp dụng: Tìm số nguyên dương $n$ thoả mãn

$$
C_{2n}^{1} + C_{2n}^{3} + \dots + C_{2n}^{2n-1} = 2\,048.
$$

2.27. Tìm giá trị lớn nhất trong các giá trị

$$
C_{n}^{0}, C_{n}^{1}, \dots, C_{n}^{n}.
$$

Áp dụng: Tìm hệ số lớn nhất của khai triển $(a + b)^{n}$, biết rằng tổng các hệ số của khai triển bằng 4 096.

2.28. Tìm số hạng có giá trị lớn nhất của khai triển $(p + q)^{n}$ với $p \gt 0$, $q \gt 0$, $p + q = 1$.

3839

# CHUYÊN ĐỀ 3 BA ĐƯỜNG CONIC VÀ ỨNG DỤNG

Ta đã biết định nghĩa và phương trình chính tắc của ba đường conic. Chuyên đề này sẽ đưa em tới những hiểu biết sâu hơn về các yếu tố đặc trưng, hình dạng và một số ứng dụng của ba đường đó.

## Bài 5 ELIP

**Thuật ngữ**
- Đỉnh, độ dài trục
- Đường chuẩn, tâm sai
- Bán kính qua tiêu
- Hình chữ nhật cơ sở

**Kiến thức, kĩ năng**
- Xác định các yếu tố đặc trưng của elip (ellipse) khi biết phương trình chính tắc.
- Giải quyết một số vấn đề thực tiễn gắn với elip.

Mỗi hành tinh trong hệ Mặt Trời chuyển động theo một quỹ đạo hình elip nhận tâm Mặt Trời là một tiêu điểm. Khoảng cách lớn nhất và nhỏ nhất từ Trái Đất đến tâm Mặt Trời tương ứng khoảng 152·10⁶ km và 147·10⁶ km (Theo: nssdc.gsfc.nasa.gov). Liệu có lập được phương trình chính tắc của elip là quỹ đạo của Trái Đất?

### 1. HÌNH DẠNG CỦA ELIP

#### HĐ1. Cho elip có phương trình chỉnh tắc $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ (H.3.1).

a) Tím toạ độ các giao điểm của elip với các trục toạ độ.

b) Hãy giải thích vì sao, nếu điểm $M(x_0; y_0)$ thuộc elip thì các điểm có toạ độ $(x_0; -y_0), (-x_0; y_0), (-x_0; -y_0)$ cũng thuộc elip.

c) Với điểm $M(x_0; y_0)$ thuộc elip, hãy so sánh $OM^2$ với $a^2, b^2$.

Cho elip có phương trình chỉnh tắc $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$. Khi đó

- Elip có hai trục đối xứng là $Ox$, $Oy$ và tâm đối xứng là gốc toạ độ $O$.
- Các điểm $A_1(-a; 0), A_2(a; 0), B_1(0; -b), B_2(0; b)$ được gọi là các đỉnh.
- Các đoạn thẳng $A_1A_2$, $B_1B_2$ tương ứng được gọi là trục lớn, trục nhỏ.
- Độ dài trục lớn, trục nhỏ tương ứng là $2a$ và $2b$.
- $b \leq OM \leq a$ với $M$ thuộc elip.
- Hình chữ nhật với bốn đỉnh $P(-a; b)$, $Q(-a; -b)$, $R(a; -b)$, $S(a; b)$ gọi là hình chữ nhật cơ sở của elip.

#### Ví dụ 1. 

Cho elip $\frac{x^2}{100} + \frac{y^2}{25} = 1$. Tính diện tích của từ giác có bốn đỉnh là bốn đỉnh của elip.

**Giải**

Các trục lớn, trục nhỏ của elip tương ứng (H.3.2) có độ dài $2a = 2\sqrt{100} = 20$ và $2b = 2\sqrt{25} = 10$.

Do đó, elip có các đỉnh là $A_1(-10; 0), A_2(10; 0), B_1(0; -5), B_2(0; 5)$. Từ giác $A_1B_1A_2B_2$ có hai đường chéo vuông góc với nhau, nên có diện tích là

$$
S = \frac{1}{2} A_1 A_2 \cdot B_1 B_2 = \frac{1}{2} \cdot 20 \cdot 10 = 100.
$$

#### Luyện tập 1. 

Viết phương trình chỉnh tắc của elip với độ dài trục lớn bằng 10 và tiêu cự bằng 6.Ví dụ 2. Cho elip có phương trình chỉnh tắc $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$. Chứng minh rằng, các điểm thuộc elip và khác đỉnh đều nằm trong hình chữ nhật cơ sở, còn bốn đỉnh của elip là trung điểm của các cạnh của hình chữ nhật đó.

**Giải**

Gọi $M(x_0; y_0)$ là một điểm thuộc elip. Do $\frac{x_0^2}{a^2} + \frac{y_0^2}{b^2} = 1$ nên $x_0^2 \leq a^2$, $y_0^2 \leq b^2$ và nếu $x_0^2 = a^2$ thì $y_0 = 0$, nếu $y_0^2 = b^2$ thì $x_0 = 0$. Vậy hoặc $-a \lt x_0 \lt a$, $-b \lt y_0 \lt b$ hoặc cặp $(x_0; y_0)$ là một trong bốn cặp $(-a; 0)$, $(a; 0)$, $(0; -b)$, $(0; b)$. Từ đó, ta có điều phải chứng minh.

**Chú ý**

Khi tỉ số $\frac{b}{a}$ càng nhỏ (càng gần về 0), thì hình chữ nhật cơ sở càng "dẹt" và elip càng "gầy". Khi tỉ số $\frac{b}{a}$ càng lớn (càng gần tới 1), thì hình chữ nhật cơ sở càng gần với hình vuông và elip càng "béo" (càng gần đường tròn) (H.3.4).

#### Luyện tập 2. (Phép co đường tròn). 

Cho đường tròn có phương trình $x^2 + y^2 = a^2$ và số $k$ $(0 \lt k \lt 1)$. Với mỗi điểm $M(x_0; y_0)$ thuộc đường tròn, gọi $H(x_0; 0)$ là hình chiều vuông góc của $M$ lên trục $Ox$ và $N$ là điểm thuộc đoạn $MH$ sao cho $HN = kHM$ (H.3.5).

a) Tính toạ độ của $N$ theo $x_0; y_0; k$.

b) Chứng minh rằng khi điểm $M$ thay đổi trên đường tròn thì $N$ thay đổi trên elip có phương trình chỉnh tắc $\frac{x^2}{a^2} + \frac{y^2}{(ka)^2} = 1$.

**Chú ý**

Người ta nói: Phép co về trục hoành hệ số $k$ biến đường tròn $x^2 + y^2 = a^2$ thành elip có phương trình $\frac{x^2}{a^2} + \frac{y^2}{(ka)^2} = 1$.

### 2. BẢN KÍNH QUA TIÊU, TÂM SAI VÀ ĐƯỜNG CHUẨN

#### HĐ2. Cho elip có hai tiêu điểm $F_1(-c; 0)$, $F_2(c; 0)$ và độ dài trục lớn bằng $2a$ và điểm $M(x; y)$.

a) Tính $MF_1^2 - MF_2^2$.

b) Khi điểm $M$ thuộc elip ($MF_1 + MF_2 = 2a$), tính $MF_1 - MF_2$, $MF_1$, $MF_2$.

Cho elip có phương trình chỉnh tắc $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, với các tiêu điểm $F_1(-c; 0)$, $F_2(c; 0)$ (với $c = \sqrt{a^2 - b^2}$). Với điểm $M(x; y)$ thuộc elip, ta có $MF_1 = a + \frac{c}{a} x$, $MF_2 = a - \frac{c}{a} x$.

Các đoạn thẳng $MF_1$, $MF_2$ được gọi là bán kính qua tiêu của $M$.

#### Ví dụ 3. Cho elip có phương trình chỉnh tắc $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$. Tìm các điểm trên elip để khoảng cách từ điểm đó đến tiêu điểm $F_1$ tương ứng đạt giá trị nhỏ nhất, lớn nhất.

**Giải.** Elip có nửa tiêu cự là $c = \sqrt{a^2 - b^2}$. Với mỗi điểm $M(x_0; y_0)$ thuộc elip, ta có bán kính qua tiêu của $M$ ứng với tiêu điểm $F_1$ là $MF_1 = a + \frac{c}{a} x_0$. Mặt khác $M(x_0; y_0)$ thuộc elip nên $-a \leq x_0 \leq a$. Do đó, $a - c \leq MF_1 = a + \frac{c}{a} x_0 \leq a + c$. Hơn nữa, $MF_1 = a - c \Leftrightarrow x_0 = -a$, $y_0 = 0$ và $MF_1 = a + c \Leftrightarrow x_0 = a$, $y_0 = 0$. Vậy $MF_1$ nhỏ nhất khi điểm $M$ trùng đỉnh $A_1(-a; 0)$ và $MF_1$ lớn nhất khi điểm $M$ trùng đỉnh $A_2(a; 0)$ của elip.

**Chú ý**

Tương tự Ví dụ 3, khoảng cách từ $M$ đến tiêu điểm $F_2$ là nhỏ nhất khi $M$ trùng đỉnh $A_2(a; 0)$ và lớn nhất khi $M$ trùng đỉnh $A_1(-a; 0)$.

>Bán kính qua tiêu có độ dài lớn nhất bằng nửa tổng của độ dài trục lớn và tiêu cực, và có độ dài nhỏ nhất bằng nửa hiệu của độ dài trục lớn và tiêu cực.

#### Luyện tập 3. Cho elip $\frac{x^2}{36} + \frac{y^2}{20} = 1$, điểm $M$ thay đổi trên elip. Hỏi khoảng cách từ $M$ tới một tiêu điểm của elip lớn nhất bằng bao nhiêu, nhỏ nhất bằng bao nhiêu?

#### Vận dụng 1. Với thông tin được đưa ra trong tình huống mở đầu, lập phương trình chỉnh tắc của elip quỹ đạo của Trái Đất, với 1 đơn vị đo trên mặt phẳng toạ độ ứng với $10^6$ km trên thực tế.

#### HĐ3. Cho elip có phương trình chỉnh tắc $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, với các tiêu điểm $F_1(-c; 0)$, $F_2(c; 0)$, ở đây $c = \sqrt{a^2 - b^2}$ (H.3.6). 

Xét các đường thẳng $\Delta_1: x = -\frac{a^2}{c}$ và $\Delta_2: x = \frac{a^2}{c}$.

Với điểm $M(x; y)$ thuộc elip, tính các tỉ số $\frac{MF_1}{d(M, \Delta_1)}$ và $\frac{MF_2}{d(M, \Delta_2)}$ theo $a$ và $c$.

Cho elip có phương trình chỉnh tắc $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, với các tiêu điểm $F_1(-c; 0)$, $F_2(c; 0)$ (với $c = \sqrt{a^2 - b^2}$).

Khi điểm $M(x; y)$ thay đổi trên elip, ta luôn có $\frac{MF_1}{d(M, \Delta_1)} \cdot \frac{MF_2}{d(M, \Delta_2)} = e$ không đổi, trong đó

- $e = \frac{c}{a}$ được gọi là **tâm sai** của elip.
- $\Delta_1: x = -\frac{a}{e}$ và $\Delta_2: x = \frac{a}{e}$ được gọi là các **đường chuẩn** tương ứng với $F_1$ và $F_2$ của elip.

**Chú ý**

- Tâm sai $e$ của elip là một số dương nhỏ hơn 1.
- Độ dài các bán kính qua tiêu của điểm $M(x; y)$ thuộc elip còn được viết dưới dạng $MF_1 = a + ex$, $MF_2 = a - ex$.

#### Ví dụ 4. Cho elip $\frac{x^2}{64} + \frac{y^2}{39} = 1$. Tìm tâm sai, tiêu điểm và các đường chuẩn của elip.44

**Giải**

Ta có $a^2 = 64$, $b^2 = 39$. Suy ra $a = 8$, $b = \sqrt{39}$ và $c = \sqrt{a^2 - b^2} = 5$.

Vậy elip có hai tiêu điểm là $F_1(-5; 0)$, $F_2(5; 0)$ và tâm sai là $e = \frac{c}{a} = \frac{5}{8} = 0,625$. Đường chuẩn ứng với tiêu điểm $F_1$ là $\Delta_1$: $x = -\frac{64}{5}$ và đường chuẩn ứng với tiêu điểm $F_2$ là $\Delta_2$: $x = \frac{64}{5}$.

#### Luyện tập 4. Cho elip có phương trình chỉnh tắc $\frac{x^2}{36} + \frac{y^2}{25} = 1$. Tìm tâm sai và các đường chuẩn của elip. Tính các bản kinh qua tiêu của điểm $M$ thuộc elip và có hoành độ bằng $-2$.

**Nhận xét.** Trong phương trình chỉnh tắc của elip, vì tâm sai $e = \frac{c}{a} = \frac{\sqrt{a^2 - b^2}}{\sqrt{a^2}} = \sqrt{1 - \left(\frac{b}{a}\right)^2}$ nên:

- $e$ càng nhỏ (càng gần về 0) thì $\frac{b}{a}$ càng lớn và do đó elip càng "béo" (càng gần đường tròn);
- $e$ càng lớn (càng gần tới 1) thì $\frac{b}{a}$ càng nhỏ và do đó elip càng "dẹt" (H.3.7).

#### Vận dụng 2. 

Mặt Trăng chuyển động theo một quỹ đạo hình elip nhận tâm Trái Đất là một tiêu điểm. Các khoảng cách lớn nhất và nhỏ nhất từ các vị trí của Mặt Trăng đến tâm Trái Đất tương ứng là 400 000 km và 363 000 km (Theo: nssdc.gsfc.nasa.gov).

### BÀI TẬP

3.1. Cho elip $\frac{x^2}{12} + \frac{y^2}{4} = 1$.

a) Xác định các đỉnh và độ dài các trục của elip.
b) Xác định tâm sai và các đường chuẩn của elip.
c) Tính các bản kinh qua tiêu của điểm $M$ thuộc elip, biết điểm $M$ có hoành độ bằng $-3$.

3.2. Viết phương trình chỉnh tắc của elip trong mỗi trường hợp sau:

a) Độ dài trục lớn bằng 8, tiêu cự bằng 6;
b) Độ dài trục lớn bằng 8 và tâm sai bằng $\frac{\sqrt{3}}{2}$.3.3. Cho elip $\frac{x^2}{9} + \frac{y^2}{5} = 1$.

a) Qua tiêu điểm của elip vẽ đường thẳng vuông góc với trục $Ox$, cắt elip tại hai điểm $A$ và $B$. Tính độ dài đoạn thẳng $AB$.

b) Tìm điểm $M$ trên elip sao cho $MF_1 = 2MF_2$ với $F_1$ và $F_2$ là hai tiêu điểm của elip (hoành độ của $F_1$ âm).

3.4. Đường tròn phụ của hình elip là đường tròn có đường kính là trục nhỏ của elip (H.3.8). Do đó, đường tròn phụ là đường tròn lớn nhất có thể nằm bên trong một hình elip. Tìm phương trình đường tròn phụ của elip $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ và chứng minh rằng, nếu điểm $M(x_0; y_0)$ thuộc elip thì điểm $N\left(\frac{b}{a} x_0; y_0\right)$ thuộc đường tròn phụ.

3.5. Với tâm sai khoảng 0,244, quỹ đạo elip của sao Diêm Vương “dẹt” hơn so với quỹ đạo của tâm hành tinh trong hệ Mặt Trời (xem Em có biết? ở cuối bài). Nửa độ dài trục lớn của elip quỹ đạo là khoảng 590 635·10⁶ km. Tìm khoảng cách gần nhất và khoảng cách xa nhất giữa sao Diêm Vương và tâm Mặt Trời (tiêu điểm của quỹ đạo) (Theo: nssdc.gsfc.nasa.gov).

3.6. Một phòng thí thầm có trần vòm elip với hai tiêu điểm ở độ cao 1,6 m (so với mặt sàn) và cách nhau 16 m. Đỉnh của mái vòm cao 7,6 m (H.3.9). Hỏi âm thanh thí thầm từ một tiêu điểm thì sau bao nhiêu giây đến được tiêu điểm kia? Biết vận tốc âm thanh là 343,2 m/s và làm tròn đáp số tới 4 chữ số sau dấu phẩy.

### Em có biết?

- Dựa vào tính chất quang học của elip, người ta đã thiết kế các phòng thí thầm (whispering gallery), với mái vòm elip hoặc các bức tường elip để hai người đứng ở hai tiêu điểm, dù không gần nhau, vẫn có thể thí thầm được với nhau. Chẳng hạn, trong phòng thí thầm hình elip tại Bảo tàng khoa học và công nghiệp Chicago, Hoa Kỳ, hai người đứng ở hai tiêu điểm của elip (trước các tấm kính elip) cách nhau khoảng 13 m vẫn có thể nói chuyện thí thầm với nhau, vì khi gặp tấm kính và các bức tường, âm thanh đã phản xạ và hội tụ về vị trí nơi người nghe đứng.

- Mặc dù các hành tinh trong hệ Mặt Trời chuyển động theo các quỹ đạo elip (H.3.10a) nhận tăm Mặt Trời là một tiêu điểm, nhưng với các tăm sai rất nhỏ, nên các quỹ đạo này rất gần với đường tròn. Tăm sai của quỹ đạo tám hành tinh quen thuộc trong hệ Mặt Trời như sau: Kim tinh: e ≈ 0,007; Mộc tinh: e ≈ 0,049; Thuỷ tinh: e ≈ 0,205; Thổ tinh: e ≈ 0,055; Hoả tinh: e ≈ 0,094; Trái Đất: e ≈ 0,017; Hải Vương tinh: e ≈ 0,011; Thiên Vương tinh: e ≈ 0,046 (Theo: nssdc.gsfc.nasa.gov).

- Ngoài định luật về quỹ đạo elip của các hành tinh trong hệ Mặt Trời, Kepler còn có các định luật nổi tiếng và quan trọng sau đây về chuyển động của các hành tinh:

    - Trong quá trình chuyển động quanh Mặt Trời, bản kính qua tiêu của hành tinh ứng với tiêu điểm tại tăm Mặt Trời quét nên những hình có diện tích bằng nhau trong những khoảng thời gian bằng nhau (H.3.10b).

    - Bình phương chu kì quỹ đạo (thời gian đi hết một vòng quỹ đạo) của một hành tinh tỉ lệ với lập phương nửa độ dài trục lớn của elip quỹ đạo.

    Sau Kepler khoảng tám thập kỉ, Newton đã chỉ ra rằng, các định luật về chuyển động và Định luật vạn vật hấp dẫn của ông kéo theo ba định luật nói trên của Kepler.
    
## Bài 6 HYPEBOL

**Thuật ngữ**
- Đinh, độ dài trục
- Đường chuẩn, tâm sai
- Bán kính qua tiêu
- Hình chữ nhật cơ sở

**Kiến thức, kĩ năng**
- Xác định các yếu tố đặc trưng của đường hypebol (hyperbola) khi biết phương trình chính tắc của nó.
- Giải quyết một số vấn đề thực tiễn gắn với đường hypebol.

Sao chổi Borisov (2I/Borisov) chuyển động theo quỹ đạo hypebol với tâm sai khoảng 3,3567 (theo: minor.planetcenter.net), chỉ đi vào hệ Mặt Trời một lần, không quay lại (H.3.11). Chỉ với thông tin tâm sai, máy tính đã có thể vẽ được hình ảnh thu nhỏ của hypebol quỹ đạo. Vậy tâm sai của hypebol là gì? Ta sẽ cùng tìm hiểu trong bài học này.

Hình 3.11
Sao chổi Borisov được phát hiện vào ngày 30/8/2019 bởi nhà thiên văn học nghiệp dư Gennady Borisov.

### 1. HÌNH DẠNG CỦA HYPEBOL

#### HĐ1. Trong mặt phẳng toạ độ, cho hypebol có phương trình chính tắc $$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$
a) Hãy giải thích vì sao nếu điểm $M(x_0; y_0)$ thuộc hypebol thì các điểm có toạ độ $(x_0; -y_0)$, $(-x_0; y_0)$, $(-x_0; -y_0)$ cũng thuộc hypebol (H.3.12).

b) Tím toạ độ các giao điểm của hypebol với trục hoành. Hypebol có cắt trục tung hay không? Vì sao?

c) Với điểm $M(x_0; y_0)$ thuộc hypebol, hãy so sánh $|x_0|$ với $a$.

Cho hypebol có phương trình chỉnh tắc $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$. Khi đó

- Hypebol có hai trục đối xứng là $Ox$ và $Oy$, và có tâm đối xứng là gốc toạ độ $O$.
- Trục $Ox$ (chứa hai tiêu điểm) cắt hypebol tại hai điểm $A_1(-a; 0)$, $A_2(a; 0)$ và được gọi là trục thực.
- Hai điểm $A_1(-a; 0)$, $A_2(a; 0)$ được gọi là hai đỉnh.
- Trục đối xứng $Oy$ không cắt hypebol và được gọi là trục ảo.
- $2a$, $2b$ tương ứng được gọi là độ dài trục thực, trục ảo.
- Trong hai nhánh của hypebol, một nhánh chứa các điểm đều có hoành độ $x \geq a$ (nhánh chứa đỉnh $A_2(a; 0)$), nhánh còn lại chứa các điểm đều có hoành độ $x \leq -a$ (nhánh chứa đỉnh $A_1(-a; 0)$).
- Hình chữ nhật với bốn đỉnh có toạ độ là $(-a; b)$, $(-a; -b)$, $(a; -b)$, $(a; b)$ được gọi là hình chữ nhật cơ sở.
- Hai đường thẳng chứa hai đường chéo của hình chữ nhật cơ sở được gọi là hai đường tiệm cận, và có phương trình là $y = -\frac{b}{a}x$ và $y = \frac{b}{a}x$.

**Chú ý.** Trong hypebol nói trên, nhánh chứa đỉnh $A_1(a; 0)$ là nhánh gồm các điểm $M$ thoả mãn $MF_1 - MF_2 = 2a$, nhánh chứa đỉnh $A_1(-a; 0)$ là nhánh gồm các điểm $M$ thoả mãn $MF_2 - MF_1 = 2a$ (với $F_1(-c; 0)$, $F_2(c; 0)$ là các tiêu điểm, $c = \sqrt{a^2 + b^2}$).

#### Ví dụ 1. Cho hypebol $\frac{x^2}{9} - \frac{y^2}{16} = 1$.

a) Tím độ dài các trục và toạ độ các đỉnh.

b) Tím các đường tiệm cận.

**Giải**

Từ phương trình của hypebol, ta có $a^2 = 9$, $b^2 = 16$, nghĩa là $a = 3$, $b = 4$.

a) Hypebol có độ dài trục thực là $2a = 6$, độ dài trục ảo là $2b = 8$, và hai đỉnh là $A_1(-3; 0)$, $A_2(3; 0)$.

b) Hypebol có hai đường tiệm cận là $y = -\frac{4}{3}x$ và $y = \frac{4}{3}x$.

**Chú ý.** Hai đường tiệm cận không cắt hypebol. Hơn nữa khi một điểm thay đổi trên hypebol thì càng xa gốc toạ độ, khoảng cách từ nó tới một trong hai đường tiệm cận càng gần bằng 0 (điều này giải thích cho việc dùng từ “tiệm cận”).

#### Luyện tập 1. Cho hypebol $\frac{x^2}{64} - \frac{y^2}{36} = 1$.

a) Tím tiêu cự và độ dài các trục.

b) Tím các đỉnh và các đường tiệm cận.49

### 2. BẢN KÍNH QUA TIÊU, TÂM SAI VÀ ĐƯỜNG CHUẨN

#### HĐ2. Cho điểm $M(x_0; y_0)$ thuộc hypebol có hai tiêu điểm $F_1(-c; 0), F_2(c; 0)$, độ dài trục thực bằng $2a$.

a) Tính $MF_1^2 - MF_2^2$.

b) Giả sử $M(x_0; y_0)$ thuộc nhánh chứa đỉnh $A_2(a; 0)$, tức là, $MF_1 - MF_2 = 2a$.
Tính $MF_1 + MF_2, MF_1, MF_2$.

c) Giả sử $M(x_0; y_0)$ thuộc nhánh chứa đỉnh $A_1(-a; 0)$, tức là, $MF_2 - MF_1 = 2a$.
Tính $MF_1 + MF_2, MF_1, MF_2$.

Cho hypebol có phương trình chỉnh tắc $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ với các tiêu điểm $F_1(-c; 0), F_2(c; 0)$ (với $c = \sqrt{a^2 + b^2}$). Với điểm $M(x; y)$ thuộc hypebol, ta có

$$
MF_1 = \left| a + \frac{c}{a} x \right|, \quad MF_2 = \left| a - \frac{c}{a} x \right|.
$$

Các đoạn thẳng $MF_1, MF_2$ được gọi là bán kính qua tiêu của điểm $M$.

Hiệu độ dài hai bán kính qua tiêu của một điểm thuộc hypebol có mối quan hệ gì với độ dài trục thực?

**Chú ý.** Mặc dù công thức độ dài bán kính qua tiêu nói trên có chứa dấu giá trị tuyệt đối, nhưng từ đó, em cũng có thể dễ dàng suy luận ngược trở lại công thức bán kính qua tiêu ứng với từng nhánh hypebol mà em đã đạt được trong HĐ2:

- Nếu $M(x; y)$ thuộc nhánh chứa đỉnh $A_2(a; 0)$ thì $x \geq a \Rightarrow a + \frac{c}{a} x \gt 0$ nên $MF_1 = \left| a + \frac{c}{a} x \right| = a + \frac{c}{a} x$ và $MF_2 = \left| a - \frac{c}{a} x \right| = -a + \frac{c}{a} x$ (để ý rằng $c \gt a$).

- Nếu $M(x; y)$ thuộc nhánh chứa đỉnh $A_1(-a; 0)$ thì $x \leq -a \Rightarrow a + \frac{c}{a} x \lt 0$ (để ý rằng $c \gt a$) nên $MF_1 = \left| a + \frac{c}{a} x \right| = -\left( a + \frac{c}{a} x \right)$ và

$$
MF_2 = \left| a - \frac{c}{a} x \right| = a - \frac{c}{a} x.
$$

#### Ví dụ 2. Cho hypebol $\frac{x^2}{4} - \frac{y^2}{21} = 1$. Tính độ dài hai bán kính qua tiêu của một điểm $M$ thuộc hypebol và có hoành độ bằng $-10$.

**Giải**

Ta có $a^2 = 4$; $b^2 = 21$. Suy ra $a = 2$, $b = \sqrt{21}$, và $c = \sqrt{a^2 + b^2} = 5$. Do đó, hypebol có hai tiêu điểm là $F_1(-5; 0), F_2(5; 0)$. Điểm $M$ thuộc hypebol và có hoành độ $x_0 = -10$ nên

$$
MF_1 = \left| a + \frac{c}{a} x_0 \right| = \left| 2 + \frac{5}{2} \cdot (-10) \right| = 23 \quad \text{và} \quad MF_2 = \left| a - \frac{c}{a} x_0 \right| = \left| 2 - \frac{5}{2} \cdot (-10) \right| = 27.
$$50

#### Luyện tập 2. Cho hypebol có độ dài trục thực bằng 6, độ dài trục áo bằng $6\sqrt{3}$. Tính độ dài hai bánh kinh qua tiêu của một điểm $M$ thuộc hypebol và có hoành độ bằng 9.

#### Ví dụ 3. Cho hypebol có phương trình chỉnh tắc $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$. Tìm điểm $M$ trên hypebol để khoảng cách từ $M$ đến tiêu điểm $F_2(c; 0)$ nhỏ nhất (H.3.13).

**Giải**

Với mỗi điểm $M(x_0; y_0)$ thuộc hypebol, ta có bán kính qua tiêu của $M$ ứng với tiêu điểm $F_2$ là $MF_2 = \left| a - \frac{c}{a} x_0 \right|$.

- Nếu $M(x_0; y_0)$ thuộc nhánh chứa đỉnh $A_2(a; 0)$ thì $x_0 \geq a$ nên $a - \frac{c}{a} x_0 \lt 0$ (để ý rằng $c \gt a$). Do đó,

$$
MF_2 = \left| a - \frac{c}{a} x_0 \right| = \frac{c}{a} x_0 - a \geq \frac{c}{a} a - a = c - a.
$$

Dấu đẳng thức xảy ra khi $x_0 = a$, tức là, khi $M(x_0; y_0)$ trùng đỉnh $A_2(a; 0)$.

- Nếu $M(x_0; y_0)$ thuộc nhánh chứa đỉnh $A_1(-a; 0)$ thì $x_0 \leq -a$ nên $a - \frac{c}{a} x_0 \geq a - \frac{c}{a} \cdot (-a) = a + c$. Suy ra

$$
MF_2 = \left| a - \frac{c}{a} x_0 \right| \geq a + c.
$$

Vậy điểm $M(x_0; y_0)$ thuộc hypebol có khoảng cách tới tiêu điểm $F_2(c; 0)$ nhỏ nhất khi $M$ trùng đỉnh $A_2(a; 0)$, và khi đó, khoảng cách bằng $c - a$.

**Chú ý.**

Tương tự, Ví dụ 3, khoảng cách từ điểm $M$ thuộc hypebol đến tiêu điểm $F_1(-c; 0)$ nhỏ nhất khi $M$ trùng đỉnh $A_1(-a; 0)$ và khi đó, khoảng cách bằng $c - a$.

#### Luyện tập 3. 

Cho hypebol $\frac{x^2}{1} - \frac{y^2}{3} = 1$ với hai tiêu điểm $F_1(-2; 0), F_2(2; 0)$. Điểm $M$ nào thuộc hypebol mà có độ dài bán kính tiêu $MF_2$ nhỏ nhất? Tính khoảng cách từ điểm đó tới các tiêu điểm.

#### HĐ3. Cho hypebol có phương trình chỉnh tắc $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ với các tiêu điểm $F_1(-c; 0), F_2(c; 0)$. Xét các đường thẳng

$\Delta_1: x = -\frac{a^2}{c}$ và $\Delta_2: x = \frac{a^2}{c}$ (H.3.14). Với điểm $M(x; y)$ thuộc hypebol, tính các tỉ số $\frac{MF_1}{d(M, \Delta_1)}$ và $\frac{MF_2}{d(M, \Delta_2)}$ theo $a$ và $c$.

Bản kinh qua tiêu có độ dài lớn nhất bằng nửa tổng của độ dài trục thực và tiêu cự, và có độ dài nhỏ nhất bằng nửa hiệu của độ dài trục thực và tiêu cự.

Cho hypebol có phương trình chỉnh tắc $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ với các tiêu điểm $F_1(-c; 0), F_2(c; 0)$.

Khi điểm $M(x; y)$ thay đổi trên hypebol, ta có luôn có $\frac{MF_1}{d(M, \Delta_1)} = \frac{MF_2}{d(M, \Delta_2)} = e$ không đổi, trong đó

- $e = \frac{c}{a}$ được gọi là tâm sai của hypebol.
- $\Delta_1: x = -\frac{a}{e}$ và $\Delta_2: x = \frac{a}{e}$ được gọi là các đường chuẩn tương ứng với $F_1(-c; 0)$ và $F_2(c; 0)$ của hypebol.


**Chú ý**

- Tâm sai $e$ của hypebol là một số lớn hơn 1.
- Độ dài các bản kinh qua tiêu của điểm $M(x; y)$ thuộc hypebol còn được viết dưới dạng

$$
MF_1 = |a + ex|, \quad MF_2 = |a - ex|.
$$

#### Ví dụ 4. Tìm tâm sai và các đường chuẩn của hypebol $\frac{x^2}{64} - \frac{y^2}{17} = 1$.

**Giải**

Ta có $a^2 = 64$, $b^2 = 17$. Suy ra $a = 8$, $b = \sqrt{17}$ và $c = \sqrt{a^2 + b^2} = 9$. Do đó, hypebol có tâm sai là $e = \frac{c}{a} = \frac{9}{8}$ và các đường chuẩn là $\Delta_1: x = \frac{64}{9}$ (ứng với tiêu điểm $F_1(-9; 0)$) và $\Delta_2: x = \frac{64}{9}$ (ứng với tiêu điểm $F_2(9; 0)$).

#### Ví dụ 5. Trong mặt phẳng toạ độ $Oxy$, hypebol $(H)$ có phương trình chỉnh tắc, đi qua điểm $A(4; 0)$ và có tâm sai $e = 3$. Tìm phương trình chỉnh tắc của $(H)$.

**Giải.** Phương trình chỉnh tắc của hypebol có dạng

$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1.
$$

Vì hypebol đi qua điểm $A(4; 0)$ nên ta có

$$
\frac{16}{a^2} - \frac{0^2}{b^2} = 1 \Rightarrow a^2 = 16 \Rightarrow a = 4.
$$

Theo công thức tính tâm sai ta có

$$
e = \frac{c}{a} = 3 \Rightarrow c = 3a = 3 \cdot 4 = 12.
$$Do đó $b^{2} = c^{2} - a^{2} = 12^{2} - 4^{2} = 128$.

Vậy phương trình chỉnh tắc của hypebol là $\frac{x^2}{16} - \frac{y^2}{128} = 1$.

#### Luyện tập 4. Trong mặt phẳng toạ độ $Oxy$, hypebol $(H)$ có phương trình chỉnh tắc, có tâm sai $e = 2$ và một đường chuẩn là $x = 8$. Lập phương trình chỉnh tắc của $(H)$.

#### Ví dụ 6. 

Giải thích vì sao ta có thể dùng hình vẽ một hypebol $(H)$ bất kì với tâm sai $e = 3,3567$ như là một hình ảnh thu nhỏ của hypebol chứa quỹ đạo của sao chổi Borisov mà ta đã gặp ở đầu bài học.

**Giải**

Giả sử hình $(H)$ có độ dài trục thực bằng $2a$ mét, tiêu cự bằng $2c$ mét, và hypebol chứa quỹ đạo của sao chổi Borisov có độ dài trục thực bằng $2a'$ mét, tiêu cự bằng $2c'$ mét. Ta có, $\frac{c}{a} = 3,3567 = \frac{c'}{a'}$. Vậy, nếu đặt $k = \frac{a'}{a} = \frac{c'}{c}$ thì $(H)$ là bản vẽ thu nhỏ của hypebol chứa sao chổi Borisov, với tỉ lệ $1:k$.

**Nhận xét.** Qua Ví dụ 6 ta thấy, tâm sai của hypebol (tương tự của elip) quyết định hình dạng của hypebol (elip).

#### Vận dụng. 

Một sao chổi đi qua hệ Mặt Trời theo quỹ đạo là một nhánh hypebol nhận tâm Mặt Trời là một tiêu điểm, khoảng cách gần nhất từ sao chổi này đến tâm Mặt Trời là $3 \cdot 10^8$ km và tâm sai của quỹ đạo hypebol là 3,6 (H.3.15). Hãy lập phương trình chỉnh tắc của hypebol chứa quỹ đạo, với 1 đơn vị đo trên mặt phẳng toạ độ ứng với $10^8$ km trên thực tế.

### BÀI TẬP

3.7. Trong mặt phẳng toạ độ, cho hypebol có phương trình chỉnh tắc $\frac{x^2}{9} - \frac{y^2}{4} = 1$. Xác định toạ độ các đỉnh, độ dài các trục, tâm sai và phương trình các đường chuẩn của hypebol.

3.8. Trong mặt phẳng toạ độ, cho hypebol có phương trình chỉnh tắc $\frac{x^2}{9} - \frac{y^2}{7} = 1$. Tính bản kinh qua tiêu của một điểm $M$ thuộc hypebol và có hoành độ bằng 12.

3.9. Trong mặt phẳng toạ độ, hypebol $(H)$ có phương trình chỉnh tắc. Lập phương trình chỉnh tắc của $(H)$ trong mỗi trường hợp sau:

a) $(H)$ có nửa trục thực bằng 4, tiêu cự bằng 10;

b) $(H)$ có tiêu cự bằng $2\sqrt{13}$, một đường tiệm cận là $y = \frac{2}{3} x$;

c) $(H)$ có tâm sai $e = \sqrt{5}$, và đi qua điểm $(\sqrt{10}; 6)$.

3.10. Một hypebol má độ dài trục thực bằng độ dài trục ảo được gọi là hypebol vuông. Tìm tâm sai và phương trình hai đường tiệm cận của hypebol vuông.

3.11. Chứng minh rằng tích các khoảng cách từ một điểm bất kì thuộc hypebol đến hai đường tiệm cận của nó là một số không đổi.3.12. Bốn trạm phát tín hiệu vô tuyến có vị trí A, B, C, D theo thứ tự đó thẳng hàng và cách đều với khoảng cách 200 km (H.3.16). Tại một thời điểm, bốn trạm cùng phát tín hiệu với vận tốc 292 000 km/s. Một tàu thuỷ nhận được tín hiệu từ trạm C trước 0,0005 s so với tín hiệu từ trạm B và nhận được tín hiệu từ trạm D sớm 0,001 s so với tín hiệu từ trạm A.

a) Tính hiệu các khoảng cách từ tàu đến các trạm B, C.

b) Tính hiệu các khoảng cách từ tàu đến các trạm A, D.

c) Chọn hệ trục toạ độ Oxy như trong Hình 3.16 (1 đơn vị trên mặt phẳng toạ độ ứng với 100 km trên thực tế). Hãy lập phương trình chỉnh tắc của hai hypebol đi qua vị trí M của tàu. Từ đó, tính toạ độ của M (các số được làm tròn đến hàng đơn vị).

d) Tính các khoảng cách từ tàu đến các trạm B, C (đáp số được làm tròn đến hàng đơn vị, tính theo đơn vị km).

## Bài 7 PARABOL

**Thuật ngữ**
- Parabol
- Đinh, tiêu điểm, đường chuẩn, bán kính qua tiêu
- Tham số tiêu

**Kiến thức, kĩ năng**
- Xác định được các yếu tố đặc trưng của đường parabol (parabola) khi biết phương trình chính tắc của nó.
- Giải quyết được một số vấn đề thực tiễn gắn với đường parabol.

Hình ảnh parabol xuất hiện trong nhiều công trình kiến trúc đẹp. Bác Vinh tham quan một công trình kiến trúc có công hình parabol với phương trình chính tắc $y^2 = 48x$ (theo đơn vị mét). Công rộng 192 m. Bác dự định làm một mô hình thu nhỏ của nó với tỉ lệ 1:100. Liệu ta có thể giúp bác Vinh lập phương trình chính tắc cho parabol ứng với mô hình đó, theo đơn vị mét?

### 1. HÌNH DẠNG CỦA PARABOL

#### HĐ1. Cho parabol có phương trình chính tắc $y^2 = 2px$ (H.3.18).

a) Nếu điểm $M(x_{0}, y_0)$ thuộc parabol thì điểm $N(x_0 \gt y_0)$ có thuộc parabol hay không?

b) Từ phương trình chính tắc của parabol, có thể rút ra điều gì về hoành độ của những điểm thuộc parabol?

Cho parabol có phương trình chính tắc $y^2 = 2px$ ($p \gt 0$). Khi đó:
- Parabol có một trục đối xứng là $Ox$ (đi qua tiêu điểm và vuông góc với đường chuẩn).
- Giao điểm $O(0; 0)$ của parabol và trục đối xứng được gọi là **đinh** của parabol.
- Tham số tiêu $p$ gấp đôi khoảng cách giữa đỉnh $O(0; 0)$ và tiêu điểm $F(\frac{p}{2}; 0)$.
- Trong phương trình chính tắc, các điểm thuộc parabol đều có hoành độ không âm.Ví dụ 1. Lập phương trình chỉnh tắc của parabol có khoảng cách từ đỉnh tới tiêu điểm bằng 3.

**Giải**

Phương trình chỉnh tắc của parabol có dạng $y^2 = 2px$, $p \gt 0$.

Khoảng cách giữa tiêu điểm $F(\frac{p}{2}; 0)$ và đỉnh $O(0; 0)$ là 3 nên $\frac{p}{2} = 3 \Rightarrow p = 6$.

Vậy parabol có phương trình chỉnh tắc là $y^2 = 12x$.

#### Luyện tập 1. Trong mặt phẳng toạ độ $Oxy$, parabol $(P)$ có phương trình chỉnh tắc và đi qua điểm $A(6; 6)$. Tìm tham số tiêu và phương trình đường chuẩn của $(P)$.

### 2. BẢN KÍNH QUA TIÊU, TÂM SAI VÀ ĐƯỜNG CHUẨN

#### HĐ2. Cho parabol có phương trình chỉnh tắc $y^2 = 2px$ (H.3.19).

a) Nêu toạ độ tiêu điểm $F$ và phương trình đường chuẩn $\Delta$ của parabol.

b) Cho điểm $M(x_0, y_0)$ thuộc parabol. Hãy so sánh $MF$ với $d(M; \Delta)$, từ đó, tính $MF$ theo $x_0$ và $y_0$. Độ dài $MF$ gọi là bán kính qua tiêu của điểm $M$.


Cho parabol có phương trình chỉnh tắc $y^2 = 2px$, $p \gt 0$. Khi đó:

- Parabol có tiêu điểm $F(\frac{p}{2}; 0)$ và đường chuẩn $\Delta$: $x = -\frac{p}{2}$;
- Với điểm $M(x; y)$ thuộc parabol, đoạn thẳng $MF$ được gọi là bán kính qua tiêu của $M$ và có độ dài $MF = x + \frac{p}{2}$.

- Với mọi điểm $M(x; y)$ thuộc parabol, tỉ số $\frac{MF}{d(M; \Delta)}$ luôn bằng 1. Ta nói parabol có tâm sai bằng 1.

#### Ví dụ 2. Cho parabol có phương trình $y^2 = 4x$.

a) Tìm toạ độ tiêu điểm và phương trình đường chuẩn của parabol.

b) Tìm bán kính qua tiêu của điểm $M$ thuộc parabol và có hoành độ bằng 3.

**Giải**

a) Từ phương trình chỉnh tắc của parabol, ta có $2p = 4 \Leftrightarrow p = 2$.

Vậy parabol có tiêu điểm là $F(1; 0)$ và đường chuẩn là $x = -1$.

b) Theo công thức bán kính qua tiêu ta có $MF = 3 + 1 = 4$.

#### Luyện tập 2. Cho parabol có phương trình $y^2 = 8x$. Tìm toạ độ tiêu điểm và phương trình đường chuẩn của parabol. Tìm bán kính qua tiêu của điểm $M$ thuộc parabol biết điểm $M$ có tung độ bằng 4.

#### Ví dụ 3. Chứng minh rằng trong các điểm thuộc parabol thì đỉnh parabol có khoảng cách tới tiêu điểm nhỏ nhất và khoảng cách đó bằng một nửa tham số tiêu.

**Giải**

Giả sử parabol có phương trình chỉnh tắc là $y^2 = 2px$, $p \gt 0$. Với điểm $M(x_0, y_0)$ bất kì thuộcparabol, ta có $x_0 \geq 0$. Do đó, theo công thức bán kính qua tiêu, ta có $MF = x_0 + \frac{p}{2} \geq \frac{p}{2}$. Dấu đẳng thức xảy ra khi và chỉ khi $x_0 = 0$ (và do đó $y_0 = 0$), tức là $M$ trùng với đỉnh $O(0; 0)$ của parabol. Từ đó, ta nhận được điều phải chứng minh.

#### Luyện tập 3. Một sao chổi chuyển động theo quỹ đạo parabol nhận tâm Mặt Trời làm tiêu điểm. Khoảng cách ngắn nhất từ sao chổi đến tâm Mặt Trời là 106 km. Lập phương trình chính tắc của quỹ đạo theo đơn vị kilômét. Hỏi khi sao chổi nằm trên đường vuông góc với trục đối xứng của quỹ đạo tại tâm Mặt Trời, thì khoảng cách từ sao chổi đến tâm Mặt Trời là bao nhiêu kilômét?

#### Vận dụng. Theo các bước sau, hãy giải quyết vấn đề đã được nêu ra ở phần mở đầu bài học.

a) Tìm chiều cao của cổng mà bác Vinh đã tham quan;
b) Tìm chiều cao và chiều rộng của mô hình thu nhỏ mà bác Vinh dự định làm;
c) Tìm phương trình chính tắc của mô hình đó, theo đơn vị mét;
d) Nếu tại tiêu điểm của mô hình, bác Vinh treo một ngôi sao thì ngôi sao đó ở độ cao bao nhiêu mét so với mặt đất?

### BÀI TẬP

3.13. Cho parabol có phương trình $y^2 = 12x$. Tìm tiêu điểm và đường chuẩn của parabol. Tính bán kính qua tiêu của điểm $M$ thuộc parabol và có hoành độ bằng 5.

3.14. Trong mặt phẳng toạ độ $Oxy$, parabol $(P)$ có phương trình chính tắc và đi qua điểm $M(3; 3\sqrt{2})$. Tìm bán kính qua tiêu và khoảng cách từ tiêu điểm tới đường chuẩn của $(P)$.

3.15. Xét đèn có bát đáy parabol với kích thước được thể hiện trên Hình 3.20. Dây tóc bóng đèn được đặt ở vị trí tiêu điểm. Tính khoảng các từ dây tóc tới đỉnh bát đáy.

3.16. Anten vệ tinh parabol ở Hình 3.21 có đầu thu đặt tại tiêu điểm, đường kính miệng anten là 240 cm, khoảng cách từ vị trí đặt đầu thu tới miệng anten là 130 cm. Tính khoảng cách từ vị trí đặt đầu thu tới đỉnh anten.

## Bài 8 SỰ THỐNG NHẤT GIỮA BA ĐƯỜNG CONIC

**Thuật ngữ**
- Đường conic
- Đường chuẩn, tâm sai

**Kiến thức, kĩ năng**
- Nhận biết đường conic như là giao của mặt phẳng với mặt nón.
- Giải quyết một số vấn đề thực tiễn gắn với ba đường conic.

Khi bay với vận tốc lớn hơn vận tốc âm thanh, máy bay sẽ tạo ra một làn sóng âm thanh hình nón (nón Mach) và gây tiếng ồn mạnh, gọi là tiếng nổ siêu thanh. Khi máy bay bay qua, những người trên mặt đất chịu tiếng ồn mạnh cùng lúc, có vị trí cùng nằm trên một nhánh hypebol. Để giải thích điều này ta cần tìm hiểu về giao của một mặt phẳng và một mặt nón.

Nón mây trắng (do ngưng tụ hơi nước) đi kèm theo nón âm thanh Mach mà ta có thể quan sát được.

### 1. GIAO CỦA MẶT PHẲNG VỚI MẶT NÓN TRÒN XOAY

Các đường conic được phát hiện và nghiên cứu từ hơn 2 000 năm trước. Menaechmus (khoảng 380 – 320, TCN) được cho là người đầu tiên nghiên cứu các conic khi xét giao của mặt phẳng với mặt nón tròn xoay (để ý rằng trong tiếng Anh, từ cone có nghĩa là mặt nón). Nghiên cứu công phu nhất trong thời kì Hy Lạp cổ đại về ba đường conic được thực hiện bởi Apollonius khoảng (262 – 190, TCN) qua bộ sách gồm tám cuốn. Ông là người đưa ra các từ elip, parabol, hypebol và thay vì cắt mặt nón đơn (H.3.22) như Menaechmus, Apollonius đã cắt nón đôi (H.3.23).

Giao của một mặt nón tròn xoay (H.3.23) với một mặt phẳng không đi qua đỉnh là một đường tròn hoặc đường conic.

Khi một máy bay có vận tốc lớn hơn vận tốc âm thanh bay qua, tại một thời điểm, nón âm thanh Mach giao với mặt đất (coi như phẳng) theo một đường tròn hay một đường conic. Chú ý rằng, trên thực tế, tiếng nổ siêu thanh có thể gây phá hủy vùng trên mặt đất mà máy bay bay qua. Do đó, người ta có quy định về vùng được phép hoạt động của loại máy bay này.

**Chú ý.** Với kiến thức hình học không gian trong chương trình lớp 11, ta sẽ có thể biện luận chi tiết hơn về giao của mặt phẳng với mặt nón, đồng thời thấy được sự tham gia của tâm sai trong từng trường hợp. Chẳng hạn, nếu máy bay bay song song với mặt đất thì tại mỗi thời điểm, giao của nón Mach và mặt đất là một nhánh của hypebol (H.3.24). Tương tự, ánh sáng phát ra từ đèn bàn có thể tạo ra trên tường một vùng sáng được giới hạn bởi một nhánh hypebol (H.3.25).

Trải nghiệm. Dùng đèn pin để tạo thành vùng sáng hình tròn, hay hình conic trên mặt phẳng.


### 2. XÁC ĐỊNH ĐƯỜNG CONIC THẢO TÂM SAI VÀ ĐƯỜNG CHUẨN

Ta đã biết, khi một điểm thay đổi trên một elip, hypebol hay parabol thì tỉ số khoáng cách từ nó tới tiêu điểm và đường chuẩn tương ứng không đổi và luôn bằng tâm sai (H.3.26).

Cho số dương $e$, điểm $F$ và đường thẳng $\Delta$ không đi qua $F$. Khi đó, tập hợp những điểm $M$ thoả mãn $\frac{MF}{d(M, \Delta)} = e$ là một đường conic có tâm sai $e$ nhận $F$ là một tiêu điểm và $\Delta$ là đường chuẩn ứng với tiêu điểm đó. Hơn nữa,

- Nếu $0 \lt e \lt 1$ thì conic là đường elip;
- Nếu $e = 1$ thì conic là đường parabol;
- Nếu $e \gt 1$ thì conic là đường hypebol.

#### Ví dụ 1. Lập phương trình đường conic, biết tâm sai bằng 2, một tiêu điểm $F(4; 0)$ và đường chuẩn tương ứng $\Delta: x - 1 = 0$.

Giải. Điểm $M(x; y)$ thuộc đường conic khi và chỉ khi

$$
\begin{array}{l}
\frac{MF}{d(M, \Delta)} = 2 \Leftrightarrow \sqrt{(x - 4)^2 + y^2} = 2|x - 1| \\
\Leftrightarrow (x - 4)^2 + y^2 = 4(x - 1)^2 \\
\Leftrightarrow 3x^2 - y^2 = 12 \\
\Leftrightarrow \frac{x^2}{4} - \frac{y^2}{12} = 1.
\end{array}
$$

Vậy đường conic có phương trình là $\frac{x^2}{4} - \frac{y^2}{12} = 1$.

#### Luyện tập 1. Lập phương trình đường conic biết tâm sai bằng $\frac{2}{3}$, một tiêu điểm $F(-2; 0)$ và đường chuẩn tương ứng $\Delta: x + \frac{9}{2} = 0$.

#### Vận dụng 2. Hãy cho biết quỹ đạo của từng vật thể trong bảng sau đây là parabol, elip hay hypebol.

|  Tên | Tâm sai của quỹ đạo | Ngày phát hiện  |
| --- | --- | --- |
|  Sao chổi Halley | 0,967 | TCN  |
|  Sao chổi Hale-Bopp | 0,995 | 23/07/1995  |
|  Sao chổi Hyakutake | 0,999 | 31/01/1996  |
|  Sao chổi C/1980E1 | 1,058 | 11/02/1980  |
|  Oumuamua | 1,201 | 19/10/2017  |

(Theo: nssdc.gsfc.nasa.gov và astronomy.com)

Sao chổi Halley có chu kì khoảng 75 – 76 năm, quan sát được từ Trái Đất.

### BÀI TẬP

3.17. Viết phương trình các đường chuẩn của các đường conic sau:

a) $\frac{x^2}{25} + \frac{y^2}{16} = 1$;

b) $\frac{x^2}{9} - \frac{y^2}{4} = 1$;

c) $y^2 = 8x$.

3.18. Cho hai elip $(E_1)$: $\frac{x^2}{25} + \frac{y^2}{16} = 1$ và $(E_2)$: $\frac{x^2}{100} + \frac{y^2}{64} = 1$.

a) Tìm mối quan hệ giữa hai tâm sai của các elip đó.

b) Chứng minh rằng với mối điểm $M$ thuộc elip $(E_2)$ thì trung điểm $N$ của đoạn thẳng $OM$ thuộc elip $(E_1)$.

3.19. Viết phương trình của đường conic có tâm sai bằng 1, tiêu điểm $F(2; 0)$ và đường chuẩn là $\Delta: x + 2 = 0$.

3.20. Quỹ đạo chuyển động của sao chổi Halley là một elip, nhận tâm Mặt Trời là một tiêu điểm, có tâm sai bằng 0,967.

a) Giải thích vì sao ta có thể coi bất kì hình vẽ elip nào với tâm sai bằng 0,967 là hình ảnh thu nhỏ của quỹ đạo sao chổi Halley.

b) Biết khoảng cách gần nhất từ sao chổi Halley đến tâm Mặt Trời là khoảng $88 \cdot 10^6$ km, tính khoảng cách xa nhất (Theo: nssdc.gsfc.nasa.gov).

---

### Em có biết?

Sao chổi là một thiên thể gồm khi đóng băng, đá và bụi. Mặc dù chỉ rộng từ vài dặm đến hàng chục dặm, nhưng khi đi vào gần Mặt Trời, sao chổi nóng lên và phun ra khí, bụi với đầu phát sáng có thể rộng hơn cả một hành tinh và đuôi có thể kéo dài hàng triệu dặm.

(Theo: solarsystem.nasa.gov)

Sao chổi rất quan trọng đối với các nhà khoa học vì chúng là những thiên thể nguyên thủy còn sót lại từ quá trình hình thành hệ Mặt Trời.

Đối với những sao chổi có quỹ đạo parabol hay hypebol chúng ta chỉ được thấy chúng một lần, sau đó chúng đi khỏi hệ Mặt Trời và không bao giờ quay lại.

Dựa vào các Định luật của Newton về chuyển động, người ta có thể rút ra mối quan hệ sau giữa quỹ đạo, vận tốc tại đỉnh quỹ đạo của sao chổi:

Quỹ đạo elip: $\sqrt{\frac{GM}{p}} \lt v \lt \sqrt{\frac{2GM}{p}}$.

Quỹ đạo parabol: $v = \sqrt{\frac{2GM}{p}}$.

Quỹ đạo hypebol: $v \gt \sqrt{\frac{2GM}{p}}$.

Trong đó, $v$ (m/s) là vận tốc tại đỉnh quỹ đạo của sao chổi, $p$ (m) là khoảng cách từ tâm Mặt Trời (tiêu điểm của quỹ đạo) tới đỉnh (gần tâm Mặt Trời) của quỹ đạo, $G = 6,67408 \cdot 10^{-11} \, \text{m}^3 \, \text{kg}^{-1} \, \text{s}^{-2}$ (hằng số hấp dẫn), $M = 1,989 \cdot 10^{30} \, \text{kg}$ (khối lượng Mặt Trời).

Đối với những vệ tinh được phóng từ Trái Đất ta cũng có điều tương tự về mối quan hệ giữa vận tốc và quỹ đạo.

## BÀI TẬP CUỐI CHUYÊN ĐỀ 3

3.21. Cho conic (S) có tâm sai $e = 2$, một tiêu điểm $F(-2; 5)$ và đường chuẩn tương ứng với tiêu điểm đó là $\Delta: x + y - 1 = 0$. Chứng minh rằng, điểm $M(x; y)$ thuộc đường conic (S) khi và chỉ khi $x^2 + y^2 + 4xy - 8x + 6y - 23 = 0$ (được gọi là phương trình của (S), tuy vậy không phải là phương trình chính tắc). Hỏi (S) là đường gì trong ba đường conic?

3.22. Viết phương trình đường conic có tâm sai $e = \frac{1}{\sqrt{2}}$, một tiêu điểm $F(-1; 0)$ và đường chuẩn tương ứng là $\Delta: x + y + 1 = 0$. Cho biết conic đó là đường gì?

3.23. Chứng minh rằng đồ thị của hàm số $y = ax^2 + bx + c$ ($a \neq 0$) là một parabol có tiêu điểm là $F\left(-\frac{b}{2a}; \frac{1 - \Delta}{4a}\right)$ và đường chuẩn là $\Delta: y = -\frac{1 + \Delta}{4a}$, trong đó $\Delta = b^2 - 4ac$.

3.24. Cho hai parabol có phương trình $y^2 = 2px$ và $y = ax^2 + bx + c$ ($a \neq 0$). Chứng minh rằng nếu hai parabol đó cắt nhau tại bốn điểm phân biệt thì bốn điểm đó cùng nằm trên đường tròn (C): $x^2 + y^2 + \left(\frac{b}{a} - 2p\right)x - \frac{1}{a}y + \frac{c}{a} = 0$.

3.25. Cho elip có phương trình $\frac{x^2}{25} + \frac{y^2}{16} = 1$. Viết phương trình đường thẳng đi qua điểm $M(2; 1)$ và cắt elip tại hai điểm $A, B$ sao cho $MA = MB$.

3.26. Một tàu vũ trụ nằm trong một quỹ đạo tròn và ở độ cao 148 km so với bề mặt Trái Đất (H.3.27). Sau khi đạt được vận tốc cần thiết để thoát khỏi lực hấp dẫn của Trái Đất, tàu vũ trụ sẽ đi theo quỹ đạo parabol với tâm Trái Đất là tiêu điểm; điểm khởi đầu của quỹ đạo này là đỉnh parabol quỹ đạo.

a) Viết phương trình chính tắc của parabol quỹ đạo (1 đơn vị đo trên mặt phẳng toạ độ ứng với 1 km trên thực tế, lấy bán kính Trái Đất là 6371 km).

b) Giải thích vì sao, kể từ khi đi vào quỹ đạo parabol, càng ngày, tàu vũ trụ càng cách xa Trái Đất.

# BẢNG TRA CỨU THUẬT NGỮ

## B 
- Bán kính qua tiêu (đối với elip) 42 
- Bán kính qua tiêu (đối với hypebol) 49 
- Bán kính qua tiêu (đối với parabol) 55

## C 
- Conic 57

## D 
- Đỉnh (của elip) 40
- Đỉnh (của hypebol) 48
- Đỉnh (của parabol) 54
- Đường chuẩn của elip 43
- Đường chuẩn của hypebol 51
- Đường chuẩn của parabol 55
- Độ dài trục ảo (của hypebol) 48
- Độ dài trục lớn (của elip) 40
- Độ dài trục nhỏ (của elip) 40
- Độ dài trục thực (của hypebol) 48

## H 
- Hình chữ nhật cơ sở (của elip) 41
- Hình chữ nhật cơ sở (của hypebol) 48
- Hệ phương trình bậc nhất ba ấn 6
- Hệ phương trình dạng hình thang 10
- Hệ phương trình dạng tam giác 7
- Hệ số (trong khai triển nhị thức Newton) 32

## M 
- Mệnh đề phụ thuộc số tự nhiên n 25

## N 
- Nghiệm của hệ phương trình bậc nhất ba ấn 6
- Nghiệm của phương trình bậc nhất ba ấn 6
- Nhị thức Newton 35

## P 
- Phương pháp Gauss 8
- Phương pháp quy nạp toán học 27
- Phương trình bậc nhất ba ấn 6

## T 
- Tam giác Pascal 33
- Tâm đối xứng của elip 40
- Tâm đối xứng của hypebol 48
- Tâm sai (của đường conic) 59
- Tâm sai (của elip) 43
- Tâm sai (của hypebol) 51
- Tiệm cận (của hypebol) 48
- Trục đối xứng (của elip) 40
- Trục đối xứng (của hypebol) 48
- Trục đối xứng (của parabol) 54
- Trục lớn (của elip) 40
- Trục nhỏ (của elip) 40
- Trục ảo (của hypebol) 48
- Trục thực (của hypebol) 4863

# BẢNG GIẢI THÍCH THUẬT NGỮ

|  Thuật ngữ | Giải thích  |
| --- | --- |
|  Đường conic | Tập hợp các điểm của mặt phẳng có tỉ số khoáng cách từ nó tới một điểm cố định F và một đường thẳng cố định Δ (không đi qua F) bằng một hằng số e. Điểm cố định F gọi là tiêu điểm, đường thẳng cố định Δ gọi là đường chuẩn ứng với tiêu điểm F và hằng số e gọi là tâm sai của conic.  |
|  Hệ phương trình bậc nhất ba ấn | Hệ gồm một số phương trình bậc nhất ba ấn x, y, z mà ta phải tìm nghiệm chung của chúng. Mỗi nghiệm chung đó gọi là một nghiệm của hệ phương trình bậc nhất ba ấn đã cho.  |
|  Phương pháp Gauss | Phương pháp giải hệ phương trình bậc nhất nhiều ấn bằng cách biến đổi tương đương hệ đã cho về một hệ dạng tam giác hoặc hệ dạng hình thang.  |
|  Phương pháp quy nạp toán học | Một phương pháp chứng minh toán học thường dùng để chứng minh tính đúng đắn của các mệnh đề toán học phụ thuộc vào số tự nhiên n.  |
|  Phương trình bậc nhất ba ấn | Phương trình bậc nhất ba ấn x, y, z là phương trình có dạng ax + by + cz = d, trong đó các hệ số a, b, c không đồng thời bằng 0.  |
|  Phương pháp quy nạp toán học | Phương pháp quy nạp toán học  |
|  Tam giác Pascal | Bảng tam giác mà hàng thứ n gồm các hệ số trong khai triển nhị thức Newton của (a + b)".  |

