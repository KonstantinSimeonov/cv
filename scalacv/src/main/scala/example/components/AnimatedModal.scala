package example.components

import org.scalajs.dom._
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

object modal_window {
  case class ModalWindowProps(
    open: Boolean,
    title: String = "",
    content: String = "",
    onClose: Callback = Callback {}
  )
  val ModalWindow =
    ScalaComponent.builder[ModalWindowProps]
      .render_P { props =>
        val cls = if (props.open) "in" else ""
        <.div(^.className := s"$cls gray-overlay",
          <.div(^.className := s"$cls skill-details-container",
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
      }.build
}
