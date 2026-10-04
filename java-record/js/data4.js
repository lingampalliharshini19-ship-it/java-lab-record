const T=(t,q,a,c,o,s,h,n)=>Object.assign(P(t,q,c,o),{a,s,h,n});
const RUN=s=>`javac ${s.replace('.java','')}.java\njava ${s.replace('.java','')}`;
WEEKS.push({n:11,t:"Character Streams & Multithreading",d:"5 character-stream programs (Reader, Writer, FileReader, FileWriter) and 7 multithreading programs (Thread, Runnable, isAlive, join).",p:[
T("Reader and Writer from Keyboard","Write a Java program to read characters from the keyboard using Reader and display them on the console using Writer.","Read characters typed on the keyboard with a Reader and display them on the console with a Writer.",`import java.io.*;

public class ReaderWriterDemo {
    public static void main(String[] args) throws IOException {
        Reader reader = new InputStreamReader(System.in);
        Writer writer = new OutputStreamWriter(System.out);

        writer.write("Enter characters (type # to stop): ");
        writer.flush();

        StringBuilder sb = new StringBuilder();
        int ch;
        while ((ch = reader.read()) != -1 && ch != '#') {
            sb.append((char) ch);
        }

        writer.write("You entered: " + sb.toString().trim() + "\\n");
        writer.flush();
    }
}`,`> javac ReaderWriterDemo.java
> java ReaderWriterDemo
Enter characters (type # to stop): Hello Java#
You entered: Hello Java`,"ReaderWriterDemo.java",RUN("ReaderWriterDemo")),
T("Read a Text File using FileReader","Write a Java program to read the contents of a text file using FileReader and display them on the console.","Read a text file character by character using FileReader and display its contents.",`import java.io.*;

public class FileReaderDemo {
    public static void main(String[] args) {
        try {
            FileReader fr = new FileReader("input.txt");
            int ch;
            while ((ch = fr.read()) != -1) {
                System.out.print((char) ch);
            }
            fr.close();
            System.out.println();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,`> javac FileReaderDemo.java
> java FileReaderDemo
Welcome to Java
Character streams are easy`,"FileReaderDemo.java",`Required input file: create input.txt in the same folder, with these two lines:
Welcome to Java
Character streams are easy

${RUN("FileReaderDemo")}`),
T("Write Text into a File using FileWriter","Write a Java program to write text into a file using FileWriter.","Take a line of text from the user and write it into a file using FileWriter.",`import java.io.*;
import java.util.Scanner;

public class FileWriterDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text to write: ");
        String text = sc.nextLine();
        try {
            FileWriter fw = new FileWriter("output.txt");
            fw.write(text);
            fw.close();
            System.out.println("Text written to output.txt successfully.");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,`> javac FileWriterDemo.java
> java FileWriterDemo
Enter text to write: Java is easy to learn
Text written to output.txt successfully.`,"FileWriterDemo.java",`No input file needed. output.txt is created automatically in the same folder.

${RUN("FileWriterDemo")}`),
T("Copy a File using FileReader and FileWriter","Write a Java program to copy the contents of one text file into another using FileReader and FileWriter.","Copy the contents of one text file into another file, character by character.",`import java.io.*;
import java.util.Scanner;

public class FileCopyDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter source file name: ");
        String source = sc.nextLine();
        System.out.print("Enter destination file name: ");
        String dest = sc.nextLine();
        try {
            FileReader fr = new FileReader(source);
            FileWriter fw = new FileWriter(dest);
            int ch;
            while ((ch = fr.read()) != -1) {
                fw.write(ch);
            }
            fr.close();
            fw.close();
            System.out.println("File copied successfully.");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,`> javac FileCopyDemo.java
> java FileCopyDemo
Enter source file name: source.txt
Enter destination file name: destination.txt
File copied successfully.`,"FileCopyDemo.java",`Required input file: create source.txt in the same folder (any text, e.g. Java Character Streams). destination.txt is created automatically.

${RUN("FileCopyDemo")}`),
T("Count Characters, Words and Lines","Write a Java program to count the number of characters, words, and lines in a text file using character streams.","Count the characters, words and lines of a text file using FileReader.",`import java.io.*;
import java.util.Scanner;

public class FileCountDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter file name: ");
        String name = sc.nextLine();

        int chars = 0, words = 0, lines = 0;
        boolean inWord = false;
        int ch, prev = -1;

        try {
            FileReader fr = new FileReader(name);
            while ((ch = fr.read()) != -1) {
                if (ch == '\\n') {
                    lines++;
                } else if (ch != '\\r') {
                    chars++;
                }
                if (ch == ' ' || ch == '\\n' || ch == '\\t' || ch == '\\r') {
                    inWord = false;
                } else if (!inWord) {
                    inWord = true;
                    words++;
                }
                prev = ch;
            }
            fr.close();
            if (prev != -1 && prev != '\\n') {
                lines++;      // last line without a newline
            }
            System.out.println("Characters : " + chars);
            System.out.println("Words      : " + words);
            System.out.println("Lines      : " + lines);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,`> javac FileCountDemo.java
> java FileCountDemo
Enter file name: data.txt
Characters : 62
Words      : 10
Lines      : 3`,"FileCountDemo.java",`Required input file: create data.txt in the same folder, with these three lines:
Java is simple
Character streams are useful
Threads run together

${RUN("FileCountDemo")}`,"Characters are counted without the line-break characters (spaces are counted)."),
T("Main Thread: Name, Priority and State","Write a Java program to demonstrate the Main Thread and display its name, priority, and state.","Show the name, priority and state of the main thread that Java creates automatically.",`public class MainThreadDemo {
    public static void main(String[] args) {
        Thread t = Thread.currentThread();

        System.out.println("Name     : " + t.getName());
        System.out.println("Priority : " + t.getPriority());
        System.out.println("State    : " + t.getState());

        t.setName("MyMainThread");
        t.setPriority(8);

        System.out.println("After changing name and priority:");
        System.out.println("Name     : " + t.getName());
        System.out.println("Priority : " + t.getPriority());
    }
}`,`> javac MainThreadDemo.java
> java MainThreadDemo
Name     : main
Priority : 5
State    : RUNNABLE
After changing name and priority:
Name     : MyMainThread
Priority : 8`,"MainThreadDemo.java",RUN("MainThreadDemo")),
T("Thread by Extending Thread Class","Write a Java program to create a thread by extending the Thread class.","Create a new thread by extending the Thread class and overriding run().",`class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(getName() + " is running: " + i);
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

public class ThreadExtendDemo {
    public static void main(String[] args) {
        MyThread t = new MyThread();   // thread created
        t.start();                     // thread started, run() is called
        System.out.println("Main thread has started the new thread.");
    }
}`,`> javac ThreadExtendDemo.java
> java ThreadExtendDemo
Main thread has started the new thread.
Thread-0 is running: 1
Thread-0 is running: 2
Thread-0 is running: 3
Thread-0 is running: 4
Thread-0 is running: 5`,"ThreadExtendDemo.java",RUN("ThreadExtendDemo"),"Note: the first two output lines may appear in the opposite order, because the main thread and Thread-0 run at the same time."),
T("Thread by Implementing Runnable","Write a Java program to create a thread by implementing the Runnable interface.","Create a thread by implementing the Runnable interface and passing it to a Thread object.",`class MyTask implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " : count = " + i);
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

public class RunnableDemo {
    public static void main(String[] args) {
        MyTask task = new MyTask();               // Runnable object
        Thread t = new Thread(task, "Worker-1");  // thread created from Runnable
        t.start();
        System.out.println("Main thread has started Worker-1.");
    }
}`,`> javac RunnableDemo.java
> java RunnableDemo
Main thread has started Worker-1.
Worker-1 : count = 1
Worker-1 : count = 2
Worker-1 : count = 3
Worker-1 : count = 4
Worker-1 : count = 5`,"RunnableDemo.java",RUN("RunnableDemo"),"Note: the first two output lines may appear in the opposite order."),
T("Multiple Threads Running Concurrently","Write a Java program to create multiple threads and demonstrate their concurrent execution.","Create three threads that run at the same time and print their steps.",`class Worker extends Thread {
    Worker(String name) {
        super(name);
    }

    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + " - step " + i);
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

public class MultiThreadDemo {
    public static void main(String[] args) {
        Worker a = new Worker("Thread-A");
        Worker b = new Worker("Thread-B");
        Worker c = new Worker("Thread-C");
        a.start();
        b.start();
        c.start();
    }
}`,`> javac MultiThreadDemo.java
> java MultiThreadDemo
Thread-A - step 1
Thread-B - step 1
Thread-C - step 1
Thread-A - step 2
Thread-B - step 2
Thread-C - step 2
Thread-A - step 3
Thread-B - step 3
Thread-C - step 3`,"MultiThreadDemo.java",RUN("MultiThreadDemo"),"Note: the order of A, B and C inside each step may change from run to run, because the threads execute concurrently."),
T("isAlive() Method","Write a Java program to demonstrate the use of isAlive() method to check whether a thread is running.","Use isAlive() to check whether a thread is running before starting, while running and after it ends.",`class Task extends Thread {
    public void run() {
        try {
            Thread.sleep(100);
            for (int i = 1; i <= 3; i++) {
                System.out.println("Thread working: step " + i);
                Thread.sleep(500);
            }
        } catch (InterruptedException e) {
            System.out.println(e);
        }
    }
}

public class IsAliveDemo {
    public static void main(String[] args) throws InterruptedException {
        Task t = new Task();
        System.out.println("Before start: isAlive = " + t.isAlive());

        t.start();
        System.out.println("After start : isAlive = " + t.isAlive());

        while (t.isAlive()) {
            System.out.println("Main: thread is still running...");
            Thread.sleep(700);
        }

        t.join();
        System.out.println("After finish: isAlive = " + t.isAlive());
    }
}`,`> javac IsAliveDemo.java
> java IsAliveDemo
Before start: isAlive = false
After start : isAlive = true
Main: thread is still running...
Thread working: step 1
Thread working: step 2
Main: thread is still running...
Thread working: step 3
Main: thread is still running...
After finish: isAlive = false`,"IsAliveDemo.java",RUN("IsAliveDemo"),"Note: the number of \"still running\" lines and their position between the thread's lines can vary slightly from run to run."),
T("join() Method","Write a Java program to demonstrate the use of join() method to make one thread wait for another thread to complete.","Make the main thread wait until another thread completes, using join().",`class Worker extends Thread {
    public void run() {
        try {
            Thread.sleep(100);
            System.out.println("Worker started");
            for (int i = 1; i <= 3; i++) {
                System.out.println("Worker working: " + i);
                Thread.sleep(500);
            }
            System.out.println("Worker finished");
        } catch (InterruptedException e) {
            System.out.println(e);
        }
    }
}

public class JoinDemo {
    public static void main(String[] args) throws InterruptedException {
        Worker w = new Worker();
        System.out.println("Main: starting the worker thread");
        w.start();

        System.out.println("Main: waiting for worker using join()");
        w.join();              // main waits here until worker finishes

        System.out.println("Main: worker has finished, main continues");
    }
}`,`> javac JoinDemo.java
> java JoinDemo
Main: starting the worker thread
Main: waiting for worker using join()
Worker started
Worker working: 1
Worker working: 2
Worker working: 3
Worker finished
Main: worker has finished, main continues`,"JoinDemo.java",RUN("JoinDemo"),"The last line always appears after \"Worker finished\" because join() makes main wait."),
T("Multiple Threads with isAlive() and join()","Write a Java program to create multiple threads and use isAlive() and join() to control their execution order.","Start three threads one after another and use join() and isAlive() so that they run in order.",`class Task extends Thread {
    Task(String name) {
        super(name);
    }

    public void run() {
        try {
            Thread.sleep(100);
            System.out.println(getName() + " started");
            Thread.sleep(300);
            System.out.println(getName() + " finished");
        } catch (InterruptedException e) {
            System.out.println(e);
        }
    }
}

public class ControlDemo {
    public static void main(String[] args) throws InterruptedException {
        Task[] threads = { new Task("Thread-1"), new Task("Thread-2"), new Task("Thread-3") };

        for (Task t : threads) {
            t.start();
            System.out.println(t.getName() + " alive after start: " + t.isAlive());
            t.join();          // wait for this thread before starting the next one
            System.out.println(t.getName() + " alive after join : " + t.isAlive());
        }
        System.out.println("All threads completed in order.");
    }
}`,`> javac ControlDemo.java
> java ControlDemo
Thread-1 alive after start: true
Thread-1 started
Thread-1 finished
Thread-1 alive after join : false
Thread-2 alive after start: true
Thread-2 started
Thread-2 finished
Thread-2 alive after join : false
Thread-3 alive after start: true
Thread-3 started
Thread-3 finished
Thread-3 alive after join : false
All threads completed in order.`,"ControlDemo.java",RUN("ControlDemo"),"Because join() is called right after start(), the threads always run one after another: Thread-1, Thread-2, Thread-3.")
]});
