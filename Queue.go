package main

import "fmt"

func main() {
	var queue []string
	queue = append(queue, "Hello ")
	queue = append(queue, "World!")

	for len(queue) > 0 {
		fmt.Println(queue[0])
		fmt.Println(queue[1:])
	}
}
