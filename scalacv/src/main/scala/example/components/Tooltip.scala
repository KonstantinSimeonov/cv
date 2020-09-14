package example.components

import org.scalajs.dom._
import scala.scalajs.js.timers._
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

object tooltip {
  class TooltipBackend($: BackendScope[VdomNode, Boolean]) {
    private val tooltipRef = Ref[html.Div]

    def render(p: VdomNode, s: Boolean): VdomNode = {
      println(s, p)
      <.div.withRef(tooltipRef)(
        ^.className := s"tooltip ${if (s) "opaque" else "transparent"}",
        <.p(p)
      )
    }

    def init: Callback =
      tooltipRef.foreach({ tooltip =>
        tooltip.addEventListener(
          "transitionend",
          (e: Event) => $.modState(!_).runNow(),
          false
        )

        setTimeout(2000)({
          $.modState(!_).runNow()
        })
      })
  }

  val Tooltip =
    ScalaComponent.builder[VdomNode]
      .initialState(true)
      .renderBackend[TooltipBackend]
      .componentDidMount(_.backend.init)
      .build
}
