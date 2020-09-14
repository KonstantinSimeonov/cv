package example

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

import example.models._

object Languages {
  val Component =
    ScalaComponent.builder[List[LanguageExpertise]]
      .render_P { languages =>
        <.article(
          ^.className := "languages-section",
          <.section(
            ^.className := "cv-component languages-component",
            <.h2(^.className := "section-title languages-title", "Languages"),
            <.ul(
              ^.className := "no-bullets",
              languages.map { lang =>
                <.li(
                  ^.className := "bottom-dashed",
                  <.strong(lang.languageName),
                  " ",
                  <.em(lang.level)
                )
              }.toVdomArray
            )
          )
        )
      }.build
}
