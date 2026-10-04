const C=(t,q,c,o,pre)=>P(t,q,c,(pre||'> javac Main.java\n> java Main')+'\n'+o);
WEEKS[1].p.push(C("Simple Program with OracleJDK","After installing the OracleJDK x64 MSI and updating PATH, check java and javac versions, then write and run a simple program.",`public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello Java - OracleJDK");
    }
}`,`Hello Java - OracleJDK`,`> java -version
> javac -version
> javac Hello.java
> java Hello`));
WEEKS[5].p=[
C("1A · Student Information System","Create a Student class with id and name, and display the information.",`class Student {
    int id; String name;
    void display() { System.out.println("ID: " + id); System.out.println("Name: " + name); }
}
public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.id = 1; s.name = "Harshini";
        s.display();
    }
}`,`ID: 1\nName: Harshini`),
C("1B · Employee Information System","Create an Employee class with id, name and salary, and display the details.",`class Employee {
    int id; String name; double salary;
    void display() { System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary); }
}
public class Main {
    public static void main(String[] args) {
        Employee e = new Employee();
        e.id = 101; e.name = "Ravi"; e.salary = 30000;
        e.display();
    }
}`,`ID: 101, Name: Ravi, Salary: 30000.0`),
C("2A · Book Details Using Constructors","Initialize Book objects using a parameterized constructor.",`class Book {
    String title, author; double price;
    Book(String t, String a, double p) { title = t; author = a; price = p; }
    void display() { System.out.println(title + " | " + author + " | " + price); }
}
public class Main {
    public static void main(String[] args) {
        Book b = new Book("Java Basics", "Herbert Schildt", 450.0);
        b.display();
    }
}`,`Java Basics | Herbert Schildt | 450.0`),
C("2B · Array of Student Objects","Create an array of Student objects and print each one.",`class Student {
    int id; String name;
    Student(int id, String name) { this.id = id; this.name = name; }
}
public class Main {
    public static void main(String[] args) {
        Student[] arr = new Student[3];
        arr[0] = new Student(1, "Anu");
        arr[1] = new Student(2, "Bala");
        arr[2] = new Student(3, "Charan");
        for (int i = 0; i < arr.length; i++)
            System.out.println(arr[i].id + " " + arr[i].name);
    }
}`,`1 Anu\n2 Bala\n3 Charan`),
C("3A · Reference Assignment","Show that two references can point to the same object.",`class Student { String name; }
public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Anu";
        Student s2 = s1;
        s2.name = "Bala";
        System.out.println("s1.name = " + s1.name);
        System.out.println("s2.name = " + s2.name);
    }
}`,`s1.name = Bala\ns2.name = Bala`),
C("3B · Comparing Object References","Compare references using ==.",`class Student { }
public class Main {
    public static void main(String[] args) {
        Student a = new Student();
        Student b = new Student();
        Student c = a;
        System.out.println("a == b : " + (a == b));
        System.out.println("a == c : " + (a == c));
    }
}`,`a == b : false\na == c : true`),
C("4A · Calculator Using Methods","Perform arithmetic using methods.",`class Calculator {
    int add(int a, int b) { return a + b; }
    int sub(int a, int b) { return a - b; }
    int mul(int a, int b) { return a * b; }
    int div(int a, int b) { return a / b; }
}
public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println("Addition = " + c.add(20, 5));
        System.out.println("Subtraction = " + c.sub(20, 5));
        System.out.println("Multiplication = " + c.mul(20, 5));
        System.out.println("Division = " + c.div(20, 5));
    }
}`,`Addition = 25\nSubtraction = 15\nMultiplication = 100\nDivision = 4`),
C("4B · Rectangle Operations","Compute area and perimeter of a rectangle using methods.",`class Rectangle {
    int length, width;
    int area() { return length * width; }
    int perimeter() { return 2 * (length + width); }
}
public class Main {
    public static void main(String[] args) {
        Rectangle r = new Rectangle();
        r.length = 5; r.width = 3;
        System.out.println("Area = " + r.area());
        System.out.println("Perimeter = " + r.perimeter());
    }
}`,`Area = 15\nPerimeter = 16`),
C("5A · Student Constructors","Use a default and a parameterized constructor.",`class Student {
    String name;
    Student() { name = "Unknown"; }
    Student(String n) { name = n; }
}
public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student("Harshini");
        System.out.println("Name: " + s1.name);
        System.out.println("Name: " + s2.name);
    }
}`,`Name: Unknown\nName: Harshini`),
C("5B · Constructor Overloading","Overload constructors with different parameters.",`class Box {
    int l, b;
    Box() { l = 1; b = 1; }
    Box(int s) { l = s; b = s; }
    Box(int l, int b) { this.l = l; this.b = b; }
    int area() { return l * b; }
}
public class Main {
    public static void main(String[] args) {
        System.out.println("Area 1: " + new Box().area());
        System.out.println("Area 2: " + new Box(4).area());
        System.out.println("Area 3: " + new Box(3, 4).area());
    }
}`,`Area 1: 1\nArea 2: 16\nArea 3: 12`),
C("6A · Using this Keyword","Use this to separate instance variables from parameters.",`class Student {
    int id; String name;
    Student(int id, String name) { this.id = id; this.name = name; }
    void display() { System.out.println("ID: " + this.id + ", Name: " + this.name); }
}
public class Main {
    public static void main(String[] args) {
        new Student(7, "Harshini").display();
    }
}`,`ID: 7, Name: Harshini`),
C("6B · Constructor Chaining","Call one constructor from another using this().",`class Employee {
    String name; int salary;
    Employee() {
        this("Unknown", 0);
        System.out.println("Default constructor");
    }
    Employee(String name, int salary) {
        this.name = name; this.salary = salary;
        System.out.println("Parameterized constructor");
    }
}
public class Main {
    public static void main(String[] args) {
        Employee e = new Employee();
        System.out.println(e.name + ", " + e.salary);
    }
}`,`Parameterized constructor\nDefault constructor\nUnknown, 0`),
C("7A · Demonstrating Garbage Collection","Make an object unreachable and request garbage collection.",`class Demo { }
public class Main {
    public static void main(String[] args) {
        Demo d = new Demo();
        System.out.println("Object created");
        d = null;
        System.out.println("Reference set to null");
        System.gc();
        System.out.println("Garbage collector requested");
    }
}`,`Object created\nReference set to null\nGarbage collector requested`),
C("7B · Object Eligibility for Garbage Collection","Show when an object becomes eligible for garbage collection.",`class Student {
    String name;
    Student(String n) { name = n; System.out.println("Created " + n); }
}
public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("A");
        Student s2 = new Student("B");
        s1 = s2;
        System.out.println("Object A is now eligible for garbage collection");
    }
}`,`Created A\nCreated B\nObject A is now eligible for garbage collection`),
C("8A · Arithmetic Overloading","Overload add() with different parameter lists.",`class MathOps {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}
public class Main {
    public static void main(String[] args) {
        MathOps m = new MathOps();
        System.out.println(m.add(5, 3));
        System.out.println(m.add(2.5, 1.5));
        System.out.println(m.add(1, 2, 3));
    }
}`,`8\n4.0\n6`),
C("8B · Overloading Area Methods","Overload area() for square, rectangle and circle.",`class Area {
    int area(int s) { return s * s; }
    int area(int l, int b) { return l * b; }
    double area(double r) { return 3.14 * r * r; }
}
public class Main {
    public static void main(String[] args) {
        Area a = new Area();
        System.out.println("Square: " + a.area(4));
        System.out.println("Rectangle: " + a.area(5, 3));
        System.out.println("Circle: " + a.area(2.0));
    }
}`,`Square: 16\nRectangle: 15\nCircle: 12.56`),
C("9A · Passing Student Object","Pass an object as a method argument.",`class Student {
    String name; int marks;
    Student(String n, int m) { name = n; marks = m; }
}
public class Main {
    static void show(Student s) {
        System.out.println("Name: " + s.name + ", Marks: " + s.marks);
    }
    public static void main(String[] args) {
        show(new Student("Harshini", 85));
    }
}`,`Name: Harshini, Marks: 85`),
C("9B · Comparing Employee Salaries","Pass two Employee objects and compare salaries.",`class Employee {
    String name; double salary;
    Employee(String n, double s) { name = n; salary = s; }
}
public class Main {
    static void compare(Employee a, Employee b) {
        if (a.salary > b.salary) System.out.println(a.name + " earns more");
        else System.out.println(b.name + " earns more");
    }
    public static void main(String[] args) {
        compare(new Employee("Ravi", 40000), new Employee("Meena", 50000));
    }
}`,`Meena earns more`),
C("10A · Returning a Student Object","Return an object from a method.",`class Student {
    String name; int year;
    Student(String n, int y) { name = n; year = y; }
}
public class Main {
    static Student create() { return new Student("Harshini", 2); }
    public static void main(String[] args) {
        Student s = create();
        System.out.println("Name: " + s.name);
        System.out.println("Year: " + s.year);
    }
}`,`Name: Harshini\nYear: 2`),
C("10B · Returning a Bank Account Object","Return a BankAccount object from a method.",`class BankAccount {
    int no; double balance;
    BankAccount(int n, double b) { no = n; balance = b; }
}
public class Main {
    static BankAccount open() { return new BankAccount(1001, 5000.0); }
    public static void main(String[] args) {
        BankAccount acc = open();
        System.out.println("Account No: " + acc.no);
        System.out.println("Balance: " + acc.balance);
    }
}`,`Account No: 1001\nBalance: 5000.0`),
C("11A · Static Variable","Share one variable among all objects.",`class Counter {
    static int count = 0;
    Counter() { count++; }
}
public class Main {
    public static void main(String[] args) {
        new Counter(); new Counter(); new Counter();
        System.out.println("Objects created: " + Counter.count);
    }
}`,`Objects created: 3`),
C("11B · Static Methods","Call static methods without creating an object.",`class MathUtil {
    static int square(int n) { return n * n; }
    static int cube(int n) { return n * n * n; }
}
public class Main {
    public static void main(String[] args) {
        System.out.println("Square of 4: " + MathUtil.square(4));
        System.out.println("Cube of 3: " + MathUtil.cube(3));
    }
}`,`Square of 4: 16\nCube of 3: 27`),
C("12A · Final Keyword","Declare constants using final.",`public class Main {
    public static void main(String[] args) {
        final double PI = 3.14;
        final int MAX = 100;
        // PI = 3.15;  // error: cannot assign a value to final variable
        System.out.println("PI = " + PI);
        System.out.println("MAX = " + MAX);
    }
}`,`PI = 3.14\nMAX = 100`),
C("12B · Blank Final Variable","Initialize a final variable inside the constructor.",`class Student {
    final int id;
    Student(int id) { this.id = id; }
}
public class Main {
    public static void main(String[] args) {
        Student s = new Student(101);
        System.out.println("ID: " + s.id);
    }
}`,`ID: 101`),
C("13A · Static Nested Class: College and Department","Use a static nested class Department inside College.",`class College {
    static String name = "ABC College";
    static class Department {
        void show() {
            System.out.println("College: " + name);
            System.out.println("Department: CSE");
        }
    }
}
public class Main {
    public static void main(String[] args) {
        College.Department d = new College.Department();
        d.show();
    }
}`,`College: ABC College\nDepartment: CSE`),
C("13B · Static Nested Class: Employee Address","Use a static nested class Address inside Employee.",`class Employee {
    String name;
    Employee(String n) { name = n; }
    static class Address {
        String city;
        Address(String c) { city = c; }
        void show() { System.out.println("City: " + city); }
    }
}
public class Main {
    public static void main(String[] args) {
        Employee e = new Employee("Ravi");
        Employee.Address a = new Employee.Address("Hyderabad");
        System.out.println("Employee: " + e.name);
        a.show();
    }
}`,`Employee: Ravi\nCity: Hyderabad`),
C("14A · Inner Class: Student Address","Use a (non-static) inner class Address inside Student.",`class Student {
    String name;
    Student(String n) { name = n; }
    class Address {
        String city;
        Address(String c) { city = c; }
        void show() { System.out.println(name + " lives in " + city); }
    }
}
public class Main {
    public static void main(String[] args) {
        Student s = new Student("Harshini");
        Student.Address a = s.new Address("Hyderabad");
        a.show();
    }
}`,`Harshini lives in Hyderabad`),
C("14B · Inner Class: Library Management","Use an inner class Book inside Library.",`class Library {
    String name = "Central Library";
    class Book {
        String title;
        Book(String t) { title = t; }
        void show() { System.out.println(title + " is available in " + name); }
    }
}
public class Main {
    public static void main(String[] args) {
        Library lib = new Library();
        Library.Book b = lib.new Book("Java Programming");
        b.show();
    }
}`,`Java Programming is available in Central Library`)
];
WEEKS[6].p=[
C("Experiment 1 · String Constructors","Create strings using a literal, new String(), a char array and a byte array; compare with == and equals().",`public class Main {
    public static void main(String[] args) {
        String s1 = "Java";
        String s2 = new String("Java");
        char[] ch = {'J', 'a', 'v', 'a'};
        String s3 = new String(ch);
        byte[] by = {74, 97, 118, 97};
        String s4 = new String(by);
        String s5 = new String();
        System.out.println("Literal: " + s1);
        System.out.println("new String: " + s2);
        System.out.println("Char array: " + s3);
        System.out.println("Byte array: " + s4);
        System.out.println("s1 == s2: " + (s1 == s2));
        System.out.println("s1.equals(s2): " + s1.equals(s2));
        System.out.println("Empty string length: " + s5.length());
    }
}`,`Literal: Java\nnew String: Java\nChar array: Java\nByte array: Java\ns1 == s2: false\ns1.equals(s2): true\nEmpty string length: 0`),
C("Experiment 2 · StringBuffer Class","Use append, insert, replace, delete, reverse, length and capacity.",`public class Main {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" World");
        System.out.println("After append: " + sb);
        sb.insert(5, ",");
        System.out.println("After insert: " + sb);
        sb.replace(0, 5, "Hi");
        System.out.println("After replace: " + sb);
        sb.delete(2, 3);
        System.out.println("After delete: " + sb);
        sb.reverse();
        System.out.println("After reverse: " + sb);
        System.out.println("Length: " + sb.length());
        System.out.println("Capacity: " + sb.capacity());
    }
}`,`After append: Hello World\nAfter insert: Hello, World\nAfter replace: Hi, World\nAfter delete: Hi World\nAfter reverse: dlroW iH\nLength: 8\nCapacity: 21`),
C("Experiment 3 · StringTokenizer Class","Read a sentence, tokenize it, then tokenize it again with a user-given delimiter. Sample input: sentence = Java is fun, simple and powerful; delimiter = ,",`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String s = sc.nextLine();
        StringTokenizer st = new StringTokenizer(s);
        System.out.println("Token count: " + st.countTokens());
        System.out.println("Words:");
        while (st.hasMoreTokens()) System.out.println(st.nextToken());
        System.out.print("Enter delimiter: ");
        String d = sc.nextLine();
        StringTokenizer st2 = new StringTokenizer(s, d);
        System.out.println("Token count: " + st2.countTokens());
        System.out.println("Tokens:");
        while (st2.hasMoreTokens()) System.out.println(st2.nextToken());
    }
}`,`Enter a sentence: Java is fun, simple and powerful\nToken count: 6\nWords:\nJava\nis\nfun,\nsimple\nand\npowerful\nEnter delimiter: ,\nToken count: 2\nTokens:\nJava is fun\n simple and powerful`),
C("Experiment 4 · Basic Inheritance","Person superclass and Student subclass; display name, age, roll number and branch.",`class Person {
    String name; int age;
    Person(String n, int a) { name = n; age = a; }
}
class Student extends Person {
    String roll, branch;
    Student(String n, int a, String r, String b) { super(n, a); roll = r; branch = b; }
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Roll No: " + roll);
        System.out.println("Branch: " + branch);
    }
}
public class Main {
    public static void main(String[] args) {
        new Student("Harshini", 19, "26EU02910", "AIML").display();
    }
}`,`Name: Harshini\nAge: 19\nRoll No: 26EU02910\nBranch: AIML`),
C("Experiment 5 · Using super Keyword","Employee and Manager: use super() and super.display().",`class Employee {
    String name; double salary;
    Employee(String n, double s) { name = n; salary = s; System.out.println("Employee constructor called"); }
    void display() { System.out.println("Name: " + name); System.out.println("Salary: " + salary); }
}
class Manager extends Employee {
    String dept;
    Manager(String n, double s, String d) { super(n, s); dept = d; System.out.println("Manager constructor called"); }
    void display() { super.display(); System.out.println("Department: " + dept); }
}
public class Main {
    public static void main(String[] args) {
        new Manager("Ravi", 60000, "Sales").display();
    }
}`,`Employee constructor called\nManager constructor called\nName: Ravi\nSalary: 60000.0\nDepartment: Sales`)
];
WEEKS[7].p=[
C("1 · Single Inheritance: Person → Student","Student inherits from Person.",`class Person { void eat() { System.out.println("Person eats"); } }
class Student extends Person { void study() { System.out.println("Student studies"); } }
public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.eat();
        s.study();
    }
}`,`Person eats\nStudent studies`),
C("2 · Using super Keyword: Vehicle → Car","Use super() and super.variable.",`class Vehicle {
    String type = "Vehicle";
    Vehicle() { System.out.println("Vehicle constructor"); }
}
class Car extends Vehicle {
    String type = "Car";
    Car() { super(); System.out.println("Car constructor"); }
    void show() {
        System.out.println("Type in parent: " + super.type);
        System.out.println("Type in child: " + type);
    }
}
public class Main {
    public static void main(String[] args) { new Car().show(); }
}`,`Vehicle constructor\nCar constructor\nType in parent: Vehicle\nType in child: Car`),
C("3 · Multilevel Inheritance: Person → Employee → Manager","Manager inherits from Employee, which inherits from Person.",`class Person { void eat() { System.out.println("Person eats"); } }
class Employee extends Person { void work() { System.out.println("Employee works"); } }
class Manager extends Employee { void manage() { System.out.println("Manager manages the team"); } }
public class Main {
    public static void main(String[] args) {
        Manager m = new Manager();
        m.eat(); m.work(); m.manage();
    }
}`,`Person eats\nEmployee works\nManager manages the team`),
C("4 · Method Overriding: Animal → Dog/Cat","Dog and Cat override sound().",`class Animal { void sound() { System.out.println("Animal makes a sound"); } }
class Dog extends Animal { void sound() { System.out.println("Dog barks"); } }
class Cat extends Animal { void sound() { System.out.println("Cat meows"); } }
public class Main {
    public static void main(String[] args) {
        new Dog().sound();
        new Cat().sound();
    }
}`,`Dog barks\nCat meows`),
C("5 · Dynamic Method Dispatch: Shape → Circle/Rectangle/Triangle","A Shape reference calls the overridden area() of the actual object.",`class Shape { double area() { return 0; } }
class Circle extends Shape {
    double r; Circle(double r) { this.r = r; }
    double area() { return 3.14 * r * r; }
}
class Rectangle extends Shape {
    double l, b; Rectangle(double l, double b) { this.l = l; this.b = b; }
    double area() { return l * b; }
}
class Triangle extends Shape {
    double b, h; Triangle(double b, double h) { this.b = b; this.h = h; }
    double area() { return 0.5 * b * h; }
}
public class Main {
    public static void main(String[] args) {
        Shape s;
        s = new Circle(2);       System.out.println("Circle area: " + s.area());
        s = new Rectangle(4, 5); System.out.println("Rectangle area: " + s.area());
        s = new Triangle(6, 3);  System.out.println("Triangle area: " + s.area());
    }
}`,`Circle area: 12.56\nRectangle area: 20.0\nTriangle area: 9.0`),
C("6 · super with Method Overriding: Employee → Manager","Manager.display() calls super.display() first.",`class Employee { void display() { System.out.println("Employee: Ravi"); } }
class Manager extends Employee {
    void display() {
        super.display();
        System.out.println("Role: Manager");
    }
}
public class Main {
    public static void main(String[] args) { new Manager().display(); }
}`,`Employee: Ravi\nRole: Manager`),
C("7 · Salary Calculation: Employee → Developer → SeniorDeveloper","Multilevel inheritance to compute total salary.",`class Employee { double basic = 20000; }
class Developer extends Employee { double bonus = 5000; }
class SeniorDeveloper extends Developer {
    double allowance = 10000;
    double total() { return basic + bonus + allowance; }
}
public class Main {
    public static void main(String[] args) {
        System.out.println("Total salary: " + new SeniorDeveloper().total());
    }
}`,`Total salary: 35000.0`),
C("8 · Dynamic Dispatch for Bank Accounts","BankAccount reference holds SavingsAccount and CurrentAccount objects.",`class BankAccount { void type() { System.out.println("Bank Account"); } }
class SavingsAccount extends BankAccount {
    void type() { System.out.println("Savings Account: interest 4%"); }
}
class CurrentAccount extends BankAccount {
    void type() { System.out.println("Current Account: no interest"); }
}
public class Main {
    public static void main(String[] args) {
        BankAccount a = new SavingsAccount(); a.type();
        a = new CurrentAccount(); a.type();
    }
}`,`Savings Account: interest 4%\nCurrent Account: no interest`),
C("9 · Constructor Execution in Multilevel Inheritance","Constructors run from the top of the hierarchy downward.",`class Person { Person() { System.out.println("Person constructor"); } }
class Student extends Person { Student() { System.out.println("Student constructor"); } }
class GraduateStudent extends Student { GraduateStudent() { System.out.println("GraduateStudent constructor"); } }
public class Main {
    public static void main(String[] args) { new GraduateStudent(); }
}`,`Person constructor\nStudent constructor\nGraduateStudent constructor`),
C("10 · Banking Application Using Inheritance","BankAccount with SavingsAccount (interest) and CurrentAccount (overdraft).",`class BankAccount {
    double balance;
    BankAccount(double b) { balance = b; }
    void deposit(double a) { balance += a; }
    void withdraw(double a) {
        if (a <= balance) balance -= a;
        else System.out.println("Insufficient balance");
    }
    void show() { System.out.println("Balance: " + balance); }
}
class SavingsAccount extends BankAccount {
    SavingsAccount(double b) { super(b); }
    void addInterest() { balance += balance * 4 / 100; }
}
class CurrentAccount extends BankAccount {
    CurrentAccount(double b) { super(b); }
    void withdraw(double a) { balance -= a; }
}
public class Main {
    public static void main(String[] args) {
        SavingsAccount s = new SavingsAccount(10000);
        s.deposit(2000); s.withdraw(500); s.addInterest(); s.show();
        CurrentAccount c = new CurrentAccount(3000);
        c.withdraw(3500); c.show();
    }
}`,`Balance: 11960.0\nBalance: -500.0`)
];
const X=(t,q,body,out,imp)=>C(t,q,(imp?imp+'\n\n':'')+body,out);
WEEKS[9].p=[
X("A1 · try-catch: Division by Zero","Handle division by zero using try-catch.",`public class Main {
    public static void main(String[] args) {
        try {
            int a = 10, b = 0;
            System.out.println(a / b);
        } catch (ArithmeticException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}`,`Exception: / by zero`),
X("A2 · Common Exceptions","Demonstrate ArithmeticException, ArrayIndexOutOfBoundsException and NullPointerException.",`public class Main {
    public static void main(String[] args) {
        try { System.out.println(10 / 0); }
        catch (ArithmeticException e) { System.out.println("ArithmeticException: " + e.getMessage()); }
        try { int[] a = new int[3]; a[5] = 1; }
        catch (ArrayIndexOutOfBoundsException e) { System.out.println("ArrayIndexOutOfBoundsException: " + e.getMessage()); }
        try { String s = null; s.length(); }
        catch (NullPointerException e) { System.out.println("NullPointerException caught"); }
    }
}`,`ArithmeticException: / by zero\nArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3\nNullPointerException caught`),
C("A3 · Uncaught Exception","Show the JVM's default exception message and stack trace when an exception is not handled.",`public class Main {
    public static void main(String[] args) {
        int[] a = {1, 2, 3};
        System.out.println("Before");
        System.out.println(a[5]);
        System.out.println("After");
    }
}`,`Before\nException in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3\n    at Main.main(Main.java:5)`),
C("A4 · Multiple Catch Clauses","Handle different exceptions with separate catch blocks.",`public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            try {
                if (i == 0) System.out.println(10 / 0);
                else if (i == 1) Integer.parseInt("abc");
                else { int[] a = new int[2]; a[5] = 1; }
            } catch (ArithmeticException e) {
                System.out.println("Divide by zero");
            } catch (NumberFormatException e) {
                System.out.println("Invalid number format");
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Invalid array index");
            }
        }
    }
}`,`Divide by zero\nInvalid number format\nInvalid array index`),
C("A5 · throw Statement","Throw an exception manually.",`public class Main {
    static void check(int age) {
        if (age < 18) throw new ArithmeticException("Not eligible to vote");
        System.out.println("Eligible to vote");
    }
    public static void main(String[] args) {
        try {
            check(20);
            check(15);
        } catch (ArithmeticException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}`,`Eligible to vote\nCaught: Not eligible to vote`),
C("A6 · throws and Exception Propagation","The exception travels up the call stack until it is caught.",`public class Main {
    static void level2() throws Exception { throw new Exception("Error in level2"); }
    static void level1() throws Exception { level2(); }
    public static void main(String[] args) {
        try {
            level1();
        } catch (Exception e) {
            System.out.println("Caught in main: " + e.getMessage());
        }
    }
}`,`Caught in main: Error in level2`),
C("A7 · finally Block","finally always executes.",`public class Main {
    public static void main(String[] args) {
        try {
            System.out.println("In try");
            int x = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("In catch");
        } finally {
            System.out.println("In finally");
        }
    }
}`,`In try\nIn catch\nIn finally`),
C("A8 · User-Defined Exception","Create a custom exception by extending Exception.",`class MyException extends Exception {
    MyException(String msg) { super(msg); }
}
public class Main {
    public static void main(String[] args) {
        try {
            throw new MyException("Custom exception occurred");
        } catch (MyException e) {
            System.out.println(e.getMessage());
        }
    }
}`,`Custom exception occurred`),
C("A9 · Validate Student Marks","Throw a custom exception when marks are outside 0–100.",`class InvalidMarksException extends Exception {
    InvalidMarksException(String msg) { super(msg); }
}
public class Main {
    static void validate(int m) throws InvalidMarksException {
        if (m < 0 || m > 100) throw new InvalidMarksException("Marks out of range: " + m);
        System.out.println("Valid marks: " + m);
    }
    public static void main(String[] args) {
        try {
            validate(85);
            validate(120);
        } catch (InvalidMarksException e) {
            System.out.println(e.getMessage());
        }
    }
}`,`Valid marks: 85\nMarks out of range: 120`),
C("A10 · Combined Application","try, multiple catch, throw, throws and finally in one withdrawal application.",`class InsufficientBalanceException extends Exception {
    InsufficientBalanceException(String m) { super(m); }
}
public class Main {
    static void withdraw(double bal, double amt) throws InsufficientBalanceException {
        if (amt <= 0) throw new IllegalArgumentException("Invalid amount");
        if (amt > bal) throw new InsufficientBalanceException("Insufficient balance");
        System.out.println("Withdrawn: " + amt);
    }
    public static void main(String[] args) {
        double[] amounts = {500, -10, 5000};
        for (double a : amounts) {
            try {
                withdraw(2000, a);
            } catch (InsufficientBalanceException e) {
                System.out.println("Error: " + e.getMessage());
            } catch (IllegalArgumentException e) {
                System.out.println("Error: " + e.getMessage());
            } finally {
                System.out.println("Transaction ended");
            }
        }
    }
}`,`Withdrawn: 500.0\nTransaction ended\nError: Invalid amount\nTransaction ended\nError: Insufficient balance\nTransaction ended`),
C("B1 · InputStream and OutputStream","Read bytes from an InputStream and write them to an OutputStream (no file needed).",`import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        InputStream in = new ByteArrayInputStream("Java".getBytes());
        OutputStream out = System.out;
        int b;
        while ((b = in.read()) != -1) out.write(b);
        out.write('\\n');
        out.flush();
    }
}`,`Java`),
C("B2 · Read a File with FileInputStream","File setup: create data.txt in the same folder as Main.java, containing: Hello Java",`import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        FileInputStream fis = new FileInputStream("data.txt");
        int b;
        while ((b = fis.read()) != -1) System.out.print((char) b);
        fis.close();
    }
}`,`Hello Java`),
C("B3 · Write to a File with FileOutputStream","Writes output.txt in the current folder (created automatically), then reads it back to verify.",`import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        FileOutputStream fos = new FileOutputStream("output.txt");
        fos.write("Welcome to Java I/O".getBytes());
        fos.close();
        System.out.println("Data written to output.txt");
        FileInputStream fis = new FileInputStream("output.txt");
        System.out.print("Content: ");
        int b;
        while ((b = fis.read()) != -1) System.out.print((char) b);
        fis.close();
    }
}`,`Data written to output.txt\nContent: Welcome to Java I/O`),
C("B4 · Copy a File","File setup: create source.txt (any text, e.g. Java Byte Streams) in the same folder as Main.java; copy.txt is created automatically.",`import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        FileInputStream in = new FileInputStream("source.txt");
        FileOutputStream out = new FileOutputStream("copy.txt");
        int b;
        while ((b = in.read()) != -1) out.write(b);
        in.close();
        out.close();
        System.out.println("File copied successfully");
    }
}`,`File copied successfully`),
C("B5 · Copy an Image with try-catch-finally","File setup: place photo.jpg in the same folder as Main.java; copy.jpg is created automatically. Handles FileNotFoundException and IOException.",`import java.io.*;

public class Main {
    public static void main(String[] args) {
        FileInputStream fis = null;
        FileOutputStream fos = null;
        try {
            fis = new FileInputStream("photo.jpg");
            fos = new FileOutputStream("copy.jpg");
            int b;
            while ((b = fis.read()) != -1) fos.write(b);
            System.out.println("Image copied successfully");
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("I/O error: " + e.getMessage());
        } finally {
            try {
                if (fis != null) fis.close();
                if (fos != null) fos.close();
            } catch (IOException e) { }
            System.out.println("Streams closed");
        }
    }
}`,`Image copied successfully\nStreams closed`)
];
