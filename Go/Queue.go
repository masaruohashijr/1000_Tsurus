package main

import (
	"container/list"
	"fmt"
)

type ohashiQueue struct {
	queue *list.List
}

func (c *ohashiQueue) Enqueue(value string) {
	c.queue.PushBack(value)
}

func main() {
	var queue []string
	queue = append(queue, "Hello ")
	queue = append(queue, "World!")

	for len(queue) > 0 {
		fmt.Println(queue[0])
		fmt.Println(queue[1:])
	}
}
