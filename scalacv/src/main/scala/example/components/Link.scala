package example.components

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

object anchor {
  val Anchor =
    ScalaComponent.builder[String]
      .render_P { url =>
        <.a(
          ^.className := "link hover-highlight",
          ^.href := url,
          ^.target := "_blank",
          url
        )
      }.build
}
