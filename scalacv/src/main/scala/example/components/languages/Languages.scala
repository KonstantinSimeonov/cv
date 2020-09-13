package example

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

object Languages {
  case class Language(name: String, level: String)
  case class Props(languages: List[Language])
  val Component =
    ScalaComponent.builder[Props]
      .render_P { props =>
        <.article(
          ^.className := "languages-section",
          <.section(
            ^.className := "cv-component languages-component",
            <.h2(^.className := "section-title languages-title", "Languages"),
            <.ul(
              ^.className := "no-bullets",
              props.languages.map { lang =>
                <.li(
                  ^.className := "bottom-dashed",
                  <.strong(lang.name),
                  <.em(lang.level)
                )
              }.toVdomArray
            )
          )
        )
      }.build
}
