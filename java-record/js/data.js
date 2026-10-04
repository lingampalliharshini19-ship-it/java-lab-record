const P=(t,q,c,o)=>({t,q,c,o});
const WEEKS=[
{n:1,t:"Language Comparison",d:"Comparison of Java, C, C++, Python and JavaScript across 20 parameters. Summary: C/C++ → performance & control · Java → portability & enterprise · Python → simplicity & versatility · JavaScript → web & cross-platform apps.",p:[]},
{n:2,t:"JDK Setup & First Program",d:"Install OpenJDK 21 and OracleJDK (x64 MSI), update PATH, verify with java -version and javac -version.",p:[
P("Hello Java (after JDK setup)","Write and execute a simple Java program to verify the JDK installation.",`public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}`,`> java -version
> javac Hello.java
> java Hello
Hello Java`)]},
{n:3,t:"Java Basics",d:"15 beginner programs: variables, operators, casting, if-else and loops.",p:[
P("Hello, Java!","Display \"Hello, Java!\" and show the basic structure of a Java program.",`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,`> javac Main.java
> java Main
Hello, Java!`),
P("Even or Odd","Check whether a number is even or odd using if-else. Sample input: 7",`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        if (n % 2 == 0) System.out.println("Even");
        else System.out.println("Odd");
    }
}`,`> javac Main.java
> java Main
Enter a number: 7
Odd`)]},
{n:4,t:"No Programming Tasks",d:"No programming tasks were assigned this week.",p:[]},
{n:5,t:"No Programming Tasks",d:"No programming tasks were assigned this week.",p:[]},
{n:6,t:"Object-Oriented Programming",d:"Objects, constructors, this, garbage collection, overloading, static, final, nested and inner classes.",p:[]},
{n:7,t:"Strings & Inheritance",d:"String constructors, StringBuffer, StringTokenizer, inheritance and super.",p:[]},
{n:8,t:"Inheritance & Polymorphism",d:"Single and multilevel inheritance, overriding, dynamic method dispatch, banking application.",p:[
P("Method Overriding","Override the sound() method of Animal in the Dog class and call it through an Animal reference.",`class Animal {
    void sound() { System.out.println("Animal makes a sound"); }
}
class Dog extends Animal {
    void sound() { System.out.println("Dog barks"); }
}
public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
    }
}`,`> javac Main.java
> java Main
Dog barks`)]},
{n:9,t:"Packages & Interfaces",d:"Creating and importing packages, access levels, CLASSPATH, and interfaces in depth.",p:[
P("Creating a User-Defined Package","Develop a Java program that creates a package named mypackage containing a Student class, and access that class from a separate Java program outside the package.",`// mypackage/Student.java
package mypackage;
public class Student {
    public void show() { System.out.println("Student class from mypackage"); }
}

// Main.java
import mypackage.Student;
public class Main {
    public static void main(String[] args) {
        new Student().show();
    }
}`,`> javac -d . Student.java Main.java
> java Main
Student class from mypackage`),
P("Importing Classes from Packages","Demonstrate importing Student and Faculty from package college using an individual import and a wildcard import.",`// college/Student.java
package college;
public class Student { public void info() { System.out.println("Student: Harshini"); } }

// college/Faculty.java
package college;
public class Faculty { public void info() { System.out.println("Faculty: Java Professor"); } }

// Main.java
import college.Student;   // individual import
import college.*;         // wildcard import
public class Main {
    public static void main(String[] args) {
        new Student().info();
        new Faculty().info();
    }
}`,`> javac -d . Student.java Faculty.java Main.java
> java Main
Student: Harshini
Faculty: Java Professor`),
P("Accessing Package Members","Demonstrate public, private, protected and default access from the same class, another class in the same package, and a class in a different package.",`// p1/Base.java
package p1;
public class Base {
    public int a = 1; protected int b = 2; int c = 3; private int d = 4;
    public void same() { System.out.println(a + " " + b + " " + c + " " + d); }
}
// p1/SamePkg.java
package p1;
public class SamePkg {
    public void test() { Base o = new Base(); System.out.println(o.a + " " + o.b + " " + o.c); }
}
// p2/Other.java
package p2;
import p1.Base;
public class Other {
    public void test() { Base o = new Base(); System.out.println(o.a); }
}
// Main.java
import p1.*; import p2.*;
public class Main {
    public static void main(String[] args) {
        new Base().same();      // all four
        new SamePkg().test();   // not private
        new Other().test();     // public only
    }
}`,`> javac -d . Base.java SamePkg.java Other.java Main.java
> java Main
1 2 3 4
1 2 3
1`),
P("Using CLASSPATH with Packages","Show how CLASSPATH helps Java locate the utilities package containing a Calculator class.",`// utilities/Calculator.java
package utilities;
public class Calculator {
    public int add(int a, int b) { return a + b; }
}

// Main.java
import utilities.Calculator;
public class Main {
    public static void main(String[] args) {
        System.out.println("Sum = " + new Calculator().add(10, 20));
    }
}`,`> javac -d C:\\java\\classes Calculator.java
> set CLASSPATH=C:\\java\\classes;.
> javac Main.java
> java Main
Sum = 30`),
P("Package with Multiple Classes","Create package bank with Account, Customer and Transaction and use them together from Main.",`// bank/Account.java
package bank;
public class Account { public int no; public double bal;
    public Account(int n, double b) { no = n; bal = b; } }
// bank/Customer.java
package bank;
public class Customer { public String name;
    public Customer(String n) { name = n; } }
// bank/Transaction.java
package bank;
public class Transaction {
    public void deposit(Account a, double amt) { a.bal += amt; } }
// Main.java
import bank.*;
public class Main {
    public static void main(String[] args) {
        Customer c = new Customer("Harshini");
        Account a = new Account(101, 5000);
        new Transaction().deposit(a, 1000);
        System.out.println("Customer: " + c.name);
        System.out.println("Account: " + a.no);
        System.out.println("Balance: " + a.bal);
    }
}`,`> javac -d . Account.java Customer.java Transaction.java Main.java
> java Main
Customer: Harshini
Account: 101
Balance: 6000.0`),
P("Defining and Implementing an Interface","Create interface Shape with area() and implement it in Circle and Rectangle.",`interface Shape { double area(); }
class Circle implements Shape {
    double r;
    Circle(double r) { this.r = r; }
    public double area() { return Math.PI * r * r; }
}
class Rectangle implements Shape {
    double l, b;
    Rectangle(double l, double b) { this.l = l; this.b = b; }
    public double area() { return l * b; }
}
public class Main {
    public static void main(String[] args) {
        Shape s1 = new Circle(2);
        Shape s2 = new Rectangle(3, 4);
        System.out.println("Circle area = " + s1.area());
        System.out.println("Rectangle area = " + s2.area());
    }
}`,`> javac Main.java
> java Main
Circle area = 12.566370614359172
Rectangle area = 12.0`),
P("Implementing More Than One Interface","A single Demo class implements Printable and Showable.",`interface Printable { void print(); }
interface Showable { void show(); }
class Demo implements Printable, Showable {
    public void print() { System.out.println("Printing..."); }
    public void show() { System.out.println("Showing..."); }
}
public class Main {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.print();
        d.show();
    }
}`,`> javac Main.java
> java Main
Printing...
Showing...`),
P("Polymorphism Through Interfaces","Use a Vehicle interface reference to refer to Car and Bike objects.",`interface Vehicle { void run(); }
class Car implements Vehicle {
    public void run() { System.out.println("Car runs on four wheels"); }
}
class Bike implements Vehicle {
    public void run() { System.out.println("Bike runs on two wheels"); }
}
public class Main {
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.run();
        v = new Bike();
        v.run();
    }
}`,`> javac Main.java
> java Main
Car runs on four wheels
Bike runs on two wheels`),
P("Using Variables Declared in an Interface","Access MAX_MARKS and PI through an implementing class and through the interface name.",`interface Constants {
    int MAX_MARKS = 100;
    double PI = 3.14;
}
public class Main implements Constants {
    public static void main(String[] args) {
        System.out.println("Via class: " + MAX_MARKS + ", " + PI);
        System.out.println("Via interface: " + Constants.MAX_MARKS + ", " + Constants.PI);
    }
}`,`> javac Main.java
> java Main
Via class: 100, 3.14
Via interface: 100, 3.14`),
P("Implementing a Nested Interface","Declare interface Department inside class University and implement it from another class.",`class University {
    interface Department { void name(); }
}
class CSE implements University.Department {
    public void name() { System.out.println("Department: Computer Science"); }
}
public class Main {
    public static void main(String[] args) {
        University.Department d = new CSE();
        d.name();
    }
}`,`> javac Main.java
> java Main
Department: Computer Science`),
P("Inheritance Between Interfaces","Dog extends Animal; Labrador implements both inherited and new methods.",`interface Animal { void eat(); }
interface Dog extends Animal { void bark(); }
class Labrador implements Dog {
    public void eat() { System.out.println("Labrador eats"); }
    public void bark() { System.out.println("Labrador barks"); }
}
public class Main {
    public static void main(String[] args) {
        Labrador l = new Labrador();
        l.eat();
        l.bark();
    }
}`,`> javac Main.java
> java Main
Labrador eats
Labrador barks`),
P("Practical Application Using Interfaces","A payment system where an interface defines common behaviour and different classes implement it.",`interface Payment { void pay(double amount); }
class CardPayment implements Payment {
    public void pay(double amount) { System.out.println("Paid " + amount + " by Card"); }
}
class UpiPayment implements Payment {
    public void pay(double amount) { System.out.println("Paid " + amount + " by UPI"); }
}
public class Main {
    public static void main(String[] args) {
        Payment p = new CardPayment();
        p.pay(500);
        p = new UpiPayment();
        p.pay(250);
    }
}`,`> javac Main.java
> java Main
Paid 500.0 by Card
Paid 250.0 by UPI`)]},
{n:10,t:"Exceptions & Byte Streams",d:"10 exception-handling programs and 5 byte-stream I/O programs.",p:[
P("try-catch: Division by Zero","Handle division by zero using try-catch.",`public class Main {
    public static void main(String[] args) {
        try {
            int r = 10 / 0;
            System.out.println(r);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
    }
}`,`> javac Main.java
> java Main
Cannot divide by zero`)]}
];
