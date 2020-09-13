package example

import org.scalajs.dom._
import org.scalajs.dom.ext._
import scala.concurrent.ExecutionContext.Implicits.global
import example.models._
import upickle.default._

object Hello extends App {
  document.querySelector("#app") match {
    case appContainer: Element =>

      Ajax.get("target/web/public/main/data.json").map {
        x =>
          val cvData = read[CVData](x.responseText)
          Home.Component(cvData).renderIntoDOM(appContainer)
      }
  }
}
