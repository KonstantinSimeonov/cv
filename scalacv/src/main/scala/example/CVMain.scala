package example

import org.scalajs.dom._
import org.scalajs.dom.ext._
import scala.scalajs.js._
import scala.concurrent.ExecutionContext.Implicits.global

object Hello extends App {
  case class Names(first: String, middle: String, last: String)
  document.querySelector("#app") match {
    case appContainer: Element =>
      Home.Component().renderIntoDOM(appContainer)

      Ajax.get("target/web/public/main/data.json").map {
        case x =>
          println(JSON.parse(x.responseText).personalInfo.names.asInstanceOf[Names].first)
      }
    case x =>
      println("takova se", x)
  }
}
