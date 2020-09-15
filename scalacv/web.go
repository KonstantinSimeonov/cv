package main

import (
    "net/http"
    "os"
    "fmt"
    "log"
)

func main() {
    fmt.Println(os.Getenv("PORT"))
    http.Handle("/", http.FileServer(http.Dir(".")))
    log.Fatal(http.ListenAndServe(":" + os.Getenv("PORT"), nil))
}
