package example.components

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

object loader {
  val Loader =
    ScalaComponent.builder[String]
      .render_P { className =>
        <.div(
          ^.className := s"$className cssloader",
          <.div(^.className := "sh1"),
          <.div(^.className := "sh2")
        )
      }
      .build
}
