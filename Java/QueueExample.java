
import java.util.LinkedList;
import java.util.Queue;

public class QueueExample{
    public static void main(String[] args) {
        //declare a Queue   
    Queue<String> str_queue = new LinkedList<>();
    //initialize the queue with values
    str_queue.add("one");
    str_queue.add("two");
    str_queue.add("three");
    str_queue.add("four");
    //print the Queue
    System.out.println("The Queue contents:" + str_queue);
    }
}

