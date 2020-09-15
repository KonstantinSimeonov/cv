package resume

import org.scalajs.dom._
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

import resume.models._
import resume.components.tooltip._
import resume.components.modal_window._

object Skills {
  val Skill = ScalaComponent.builder[Skill]
    .render_P { skill =>
      <.div(
        ^.className := "skill-content",
        <.strong(^.className := "skill-name", skill.name)
      )
    }.build

  case class SkillsState(
    showTooltip: Boolean,
    focusedSkill: Option[Skill]
  )

  class SkillsBackend($: BackendScope[List[Skill], SkillsState]) {
    def render(skills: List[Skill], state: SkillsState): VdomNode = {
      <.section(
        if (state.showTooltip)
          Tooltip(TooltipProps("Click a skill to see more!", "right"))
        else EmptyVdom,
        ^.className := "cv-component skills-component",
        <.h2(^.className := "section-title skills-title", "Skills"),
        <.div(
          ^.className := "skills-container",
          <.ul(
            ^.className := "skill-list no-bullets",
            skills.sortBy(_.priority).map { s =>
              <.li(
                ^.className := "skill rectangle",
                Skill(s),
                ^.onClick --> (
                  $.modState(_.copy(focusedSkill = Some(s))) >>
                  hideTooltip
                )
              )
            }.toVdomArray
          )
        ),
        ModalWindow(
          state.focusedSkill.fold(
            ModalWindowProps(false)
          ) { skill =>
            ModalWindowProps(
              true,
              skill.name,
              skill.description,
              $.modState(_.copy(focusedSkill = None))
            )
          }
        )
      )
    }

    private def hideTooltip: Callback = $.modState(_.copy(showTooltip = false))
  }

  val Component =
    ScalaComponent.builder[List[Skill]]
      .initialState(SkillsState(true, None))
      .renderBackend[SkillsBackend]
      .build
}
