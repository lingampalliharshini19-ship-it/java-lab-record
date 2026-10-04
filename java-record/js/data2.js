const M=(t,q,body,out)=>P(t,q,`public class Main {\n    public static void main(String[] args) {\n${body.split('\n').map(l=>'        '+l).join('\n')}\n    }\n}`,'> javac Main.java\n> java Main\n'+out);
WEEKS[2].p=[
M("Hello, Java!","Display \"Hello, Java!\" and demonstrate the basic structure of a Java program (class, main method, println).",`System.out.println("Hello, Java!");`,`Hello, Java!`),
M("Primitive Data Types","Declare variables of all primitive data types (byte, short, int, long, float, double, char, boolean) and display their values.",`byte b = 10;
short s = 200;
int i = 5000;
long l = 1234567890L;
float f = 3.5f;
double d = 9.99;
char c = 'A';
boolean ok = true;
System.out.println("byte: " + b);
System.out.println("short: " + s);
System.out.println("int: " + i);
System.out.println("long: " + l);
System.out.println("float: " + f);
System.out.println("double: " + d);
System.out.println("char: " + c);
System.out.println("boolean: " + ok);`,`byte: 10\nshort: 200\nint: 5000\nlong: 1234567890\nfloat: 3.5\ndouble: 9.99\nchar: A\nboolean: true`),
M("Integer Arithmetic","Perform addition, subtraction, multiplication, division and modulus on two integers.",`int a = 17, b = 5;
System.out.println("Sum = " + (a + b));
System.out.println("Difference = " + (a - b));
System.out.println("Product = " + (a * b));
System.out.println("Quotient = " + (a / b));
System.out.println("Remainder = " + (a % b));`,`Sum = 22\nDifference = 12\nProduct = 85\nQuotient = 3\nRemainder = 2`),
M("Floating-Point Arithmetic","Perform arithmetic operations on floating-point numbers.",`double x = 7.5, y = 2.5;
System.out.println("Sum = " + (x + y));
System.out.println("Difference = " + (x - y));
System.out.println("Product = " + (x * y));
System.out.println("Quotient = " + (x / y));
System.out.println("Modulus = " + (x % y));`,`Sum = 10.0\nDifference = 5.0\nProduct = 18.75\nQuotient = 3.0\nModulus = 0.0`),
M("Character and ASCII Value","Display a character and its corresponding ASCII/Unicode value.",`char c = 'A';
int code = c;
System.out.println("Character: " + c);
System.out.println("Unicode value: " + code);`,`Character: A\nUnicode value: 65`),
M("Boolean Variables and Expressions","Demonstrate Boolean variables and Boolean expressions.",`int a = 10, b = 20;
boolean r1 = a < b;
boolean r2 = (a == b);
boolean r3 = r1 && !r2;
System.out.println("a < b : " + r1);
System.out.println("a == b : " + r2);
System.out.println("r1 && !r2 : " + r3);`,`a < b : true\na == b : false\nr1 && !r2 : true`),
M("Variables of Different Types","Declare and initialize different types of variables and display their values.",`String name = "Harshini";
String roll = "26EU02910";
int year = 2;
double cgpa = 8.5;
char section = 'B';
System.out.println("Name: " + name);
System.out.println("Roll No: " + roll);
System.out.println("Year: " + year);
System.out.println("CGPA: " + cgpa);
System.out.println("Section: " + section);`,`Name: Harshini\nRoll No: 26EU02910\nYear: 2\nCGPA: 8.5\nSection: B`),
M("Swapping Two Variables","Swap two variables using a temporary variable.",`int a = 10, b = 20;
System.out.println("Before swap: a=" + a + ", b=" + b);
int temp = a;
a = b;
b = temp;
System.out.println("After swap: a=" + a + ", b=" + b);`,`Before swap: a=10, b=20\nAfter swap: a=20, b=10`),
M("Widening Type Conversion","Demonstrate automatic (widening) type conversion.",`int i = 100;
long l = i;
float f = l;
double d = f;
System.out.println("int: " + i);
System.out.println("long: " + l);
System.out.println("float: " + f);
System.out.println("double: " + d);`,`int: 100\nlong: 100\nfloat: 100.0\ndouble: 100.0`),
M("Narrowing Type Casting","Demonstrate explicit (narrowing) type casting.",`double d = 9.78;
int i = (int) d;
int big = 130;
byte b = (byte) big;
System.out.println("double: " + d);
System.out.println("int: " + i);
System.out.println("byte: " + b);`,`double: 9.78\nint: 9\nbyte: -126`),
M("Character ↔ Unicode Using Casting","Convert a character to its Unicode value and back using type casting.",`char c = 'B';
int code = (int) c;
char next = (char) (code + 1);
System.out.println("Unicode of B: " + code);
System.out.println("Character of " + (code + 1) + ": " + next);`,`Unicode of B: 66\nCharacter of 67: C`),
P("Even or Odd","Check whether a number is even or odd using if-else. Sample input: 7",`import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("Enter a number: ");\n        int n = sc.nextInt();\n        if (n % 2 == 0)\n            System.out.println("Even");\n        else\n            System.out.println("Odd");\n    }\n}`,`> javac Main.java\n> java Main\nEnter a number: 7\nOdd`),
M("Largest of Two Numbers","Find the largest of two numbers using if-else.",`int a = 25, b = 40;
if (a > b)
    System.out.println("Largest = " + a);
else
    System.out.println("Largest = " + b);`,`Largest = 40`),
M("Keywords and Identifiers","Show valid identifiers and explain why reserved keywords (class, int, for…) cannot be used as variable names: the compiler reserves them for syntax, so `int class = 5;` gives a compile error.",`String studentName = "Harshini";   // valid
int _total = 100;                  // valid
double $price = 99.5;              // valid
// int class = 5;                  // INVALID: 'class' is a keyword
System.out.println(studentName);
System.out.println(_total);
System.out.println($price);`,`Harshini\n100\n99.5`),
M("for Loop 1 to 10","Display numbers from 1 to 10 using a for loop.",`for (int i = 1; i <= 10; i++) {
    System.out.print(i + " ");
}`,`1 2 3 4 5 6 7 8 9 10`)
];
const L=["Feature|Java|C|C++|Python|JavaScript",
"Open source / Commercial|Open source (OpenJDK) + Oracle JDK|Open standard, free compilers|Open standard, free compilers|Open source|Open standard (ECMAScript)",
"Compiler / Interpreter|Compiler + JVM (JIT)|Compiler|Compiler|Interpreter|Interpreter / JIT",
"OOP support|Yes (full)|No (procedural)|Yes|Yes|Yes",
"Developer organization|Sun / Oracle|Bell Labs|Bell Labs|Python Software Foundation|Netscape / Ecma",
"Developer / person|James Gosling|Dennis Ritchie|Bjarne Stroustrup|Guido van Rossum|Brendan Eich",
"Major version (2026)|Java 25 LTS (lab uses 21)|C23|C++23|Python 3.14|ES2025",
"Primary purpose|Enterprise, general purpose|System programming|System + performance apps|Scripting, data, AI|Web scripting",
"Common applications|Android, banking, backend|OS, embedded|Games, browsers, engines|AI/ML, automation|Web front-end, Node.js",
"Database support|JDBC|Via libraries (ODBC)|Via libraries|DB-API, SQLAlchemy|Node drivers, ORMs",
"Memory management|Automatic (GC)|Manual|Manual + RAII|Automatic (GC)|Automatic (GC)",
"Security features|Sandbox, bytecode verifier|Minimal|Minimal|Moderate|Browser sandbox",
"Performance|High|Very high|Very high|Moderate|Moderate to high (V8)",
"Platform independence|Yes (JVM)|No|No|Yes|Yes",
"Other features|Multithreading, huge API|Pointers, portable code|Templates, STL|Dynamic typing, rich libraries|Async, event-driven",
"Ease of learning|Moderate|Moderate to hard|Hard|Easy|Easy to moderate",
"Popular IDEs|IntelliJ, Eclipse, NetBeans|Code::Blocks, VS Code|Visual Studio, CLion|PyCharm, VS Code|VS Code, WebStorm",
"Compilation output|.class bytecode|Native executable|Native executable|.pyc bytecode|None (JIT)",
"Advantages|Portable, secure, robust|Fast, near hardware|Fast + OOP|Simple, versatile|Runs in every browser",
"Limitations|Verbose, slower startup|No OOP, manual memory|Complex|Slower, GIL|Quirky typing"].map(r=>r.split('|'));
WEEKS[0].html=`<div class="tw"><table><thead><tr>${L[0].map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${L.slice(1).map(r=>`<tr>${r.map((c,i)=>i?`<td>${c}</td>`:`<th>${c}</th>`).join('')}</tr>`).join('')}</tbody></table></div>
<div class="grid"><div class="card"><b>C / C++</b><p>Performance &amp; control</p></div><div class="card"><b>Java</b><p>Portability &amp; enterprise</p></div><div class="card"><b>Python</b><p>Simplicity &amp; versatility</p></div><div class="card"><b>JavaScript</b><p>Web &amp; cross-platform apps</p></div></div>`;
WEEKS[1].html=`<div class="card"><b>Part A – OpenJDK:</b><p>Search “OpenJDK” → Downloads → OpenJDK 21 Windows x64 JDK → install → <code>java -version</code> → add the bin folder to PATH (System Variables) → verify again.</p><b>Part B – OracleJDK:</b><p>Search “OracleJDK” → Downloads → x64 MSI Installer → install → <code>java -version</code> and <code>javac -version</code> → update PATH → verify again.</p></div>`;
