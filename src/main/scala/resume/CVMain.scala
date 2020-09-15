package resume

import org.scalajs.dom._

object ResumeMain extends App {
  document.querySelector("#app") match {
    case appContainer: Element =>
      App.Component().renderIntoDOM(appContainer)
  }
}
