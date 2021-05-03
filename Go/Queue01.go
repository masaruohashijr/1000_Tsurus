package main

import (
	"fmt"
	"strconv"
)

func prepend(x []string, y string) []string {
	x = append(x, "")
	copy(x[1:], x)
	x[0] = y
	return x
}

type QueueHeadTail struct {
	queue []string
}

func (c *QueueHeadTail) Add(value string) string {
	c.queue = prepend(c.queue, value)
	return c.queue[len(c.queue)-1]
}

func (c *QueueHeadTail) Remove() string {
	x := c.queue[c.Length()-1:][0]
	c.queue = c.queue[:c.Length()-1]
	return x
}

func (c *QueueHeadTail) Next() string {
	if len(c.queue) > 0 {
		return c.queue[c.Length()-1]
	} else {
		return "undefined"
	}
}

func (c *QueueHeadTail) Empty() bool {
	return len(c.queue) == 0
}

func (c *QueueHeadTail) Length() int {
	return len(c.queue)
}

func main() {
	var marvelMovies QueueHeadTail
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
