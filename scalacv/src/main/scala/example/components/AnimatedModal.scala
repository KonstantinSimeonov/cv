package example.components

import org.scalajs.dom._
import scala.scalajs.js.timers._
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

object modal_window {
  case class ModalWindowProps(
    open: Boolean,
    title: String = "",
    content: String = "",
    onClose: Callback = Callback {}
  )

  class ModalWindowBackend($: BackendScope[ModalWindowProps, Boolean]) {
    def render(props: ModalWindowProps, in: Boolean): VdomNode = {
      val cls = if (in) "in" else ""
      val open = if (props.open) "open" else ""
      <.div(
        ^.classSet(
          "gray-overlay" -> true,
          "in" -> in,
          "open" -> props.open
        ),
        <.div(
          ^.classSet(
            "skill-details-container" -> true,
            "in" -> in
          ),
          <.a(
            ^.className := "close-btn",
            ^.onClick --> props.onClose,
            "close"
          ),
          <.article(^.className := "skill-details",
            <.strong(^.className := "skill-title", props.title),
            <.p(
              ^.className := "skill-description",
              ^.dangerouslySetInnerHtml := props.content
            )
          )
        )
      )
    }
  }

  val ModalWindow =
    ScalaComponent.builder[ModalWindowProps]
      .initialState(false)
      .renderBackend[ModalWindowBackend]
      .componentWillReceiveProps(rp => Callback {
        if (rp.currentProps.open != rp.nextProps.open)
          setTimeout(200) { rp.setState(rp.nextProps.open).runNow() }
      })
      .build
}
