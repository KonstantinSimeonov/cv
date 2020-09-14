package example

import japgolly.scalajs.react.feature.ReactFragment
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

import example.models._
import example.components.tooltip._

object Skills {
  val Skill = ScalaComponent.builder[Skill]
    .render_P { skill =>
      <.div(
        ^.className := "skill-content",
        <.strong(^.className := "skill-name", skill.name)
      )
    }.build

  val Component =
    ScalaComponent.builder[List[Skill]]
      .render_P { skills =>
        <.section(
          Tooltip("Click a skill to see more!"),
          ^.className := "cv-component skills-component",
          <.h2(^.className := "section-title skills-title", "Skills"),
          <.div(
            ^.className := "skills-container",
            <.ul(
              ^.className := "skill-list no-bullets",
              skills.sortBy(_.priority).map { s =>
                <.li(
                  ^.className := "skill rectangle",
                  Skill(s)
                )
              }.toVdomArray
            )
          )
        )
      }.build
}
