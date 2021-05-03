package main

import (
	"fmt"
	"strconv"
)

type QueueTailHead struct {
	queue []string
}

func (c *QueueTailHead) Add(value string) string {
	c.queue = append(c.queue, value)
	return c.queue[len(c.queue)-1]
}

func (c *QueueTailHead) Remove() string {
	x := c.queue[0]
	c.queue = c.queue[1:]
	return x
}

func (c *QueueTailHead) Next() string {
	if len(c.queue) > 0 {
		return c.queue[c.Length()-1]
	} else {
		return "undefined"
	}
}

func (c *QueueTailHead) Empty() bool {
	return len(c.queue) == 0
}

func (c *QueueTailHead) Length() int {
	return len(c.queue)
}

func main() {
	var marvelMovies QueueTailHead
	fmt.Println("FIFO => Inserindo os elementos na Queue")
	fmt.Println("INPUT: " + marvelMovies.Add("Iron Man"))
	fmt.Println("INPUT: " + marvelMovies.Add("Captain America"))
	fmt.Println("INPUT: " + marvelMovies.Add("Incredible Hulk"))
	fmt.Println("LENGTH: " + strconv.Itoa(marvelMovies.Length()))
	fmt.Println("FIFO => Removendo os elementos da Queue")
	fmt.Println("OUTPUT: " + marvelMovies.Remove())
	fmt.Println("NEXT: " + marvelMovies.Next())
	fmt.Println("LENGTH: " + strconv.Itoa(marvelMovies.Length()))
	fmt.Println("OUTPUT: " + marvelMovies.Remove())
	fmt.Println("NEXT: " + marvelMovies.Next())
	fmt.Println("LENGTH: " + strconv.Itoa(marvelMovies.Length()))
	fmt.Println("OUTPUT: " + marvelMovies.Remove())
	fmt.Println("NEXT: " + marvelMovies.Next())
	fmt.Println("LENGTH: " + strconv.Itoa(marvelMovies.Length()))
	fmt.Println("Está vazio? " + strconv.FormatBool(marvelMovies.Empty()))
}
