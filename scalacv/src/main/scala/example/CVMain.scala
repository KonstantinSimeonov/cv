package example

import org.scalajs.dom._

object Hello extends App {
  document.querySelector("#app") match {
    case appContainer: Element =>
      App.Component().renderIntoDOM(appContainer)
  }
}
