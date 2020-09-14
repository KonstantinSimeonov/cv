package example

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

package object components {
  val Timespan =
    ScalaComponent.builder[(String, String)]
      .render_P {
        case (from, to) =>
          <.time(^.className := "timespan", s" $from - $to")
      }.build
}
