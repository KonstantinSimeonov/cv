package example.components

import org.scalajs.dom._
import scala.scalajs.js.timers._
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

object tooltip {
  case class TooltipProps(text: String, className: String)
  class TooltipBackend($: BackendScope[TooltipProps, Boolean]) {
    private val tooltipRef = Ref[html.Div]

    def render(props: TooltipProps, opaque: Boolean): VdomNode = {
      <.div.withRef(tooltipRef)(
        ^.className := s"${props.className} tooltip ${if (opaque) "opaque" else "transparent"}",
        <.p(props.text)
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
    ScalaComponent.builder[TooltipProps]
      .initialState(true)
      .renderBackend[TooltipBackend]
      .componentDidMount(_.backend.init)
      .build
}
