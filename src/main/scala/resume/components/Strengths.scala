package resume

import japgolly.scalajs.react.feature.ReactFragment
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

import resume.models._

object Strengths {
  val Component =
    ScalaComponent.builder[List[Strength]]
      .render_P { strengths =>
        <.section(
          ^.className := "cv-component strengths-component",
          <.h2(^.className := "section-title strengths-title", "Strengths"),
          <.ul(
            ^.className := "no-bullets strengths",
            strengths.map { s =>
              <.li(
                ^.key := s.name,
                ^.className := "bottom-dashed",
                " ",
                <.strong(s.name),
                <.p(s.description)
              )
            }.toVdomArray
          )
        )
      }.build
}
