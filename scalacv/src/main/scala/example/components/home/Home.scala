package example

import japgolly.scalajs.react.feature.ReactFragment
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

import example.models.CVData

object Home {
  val Component =
    ScalaComponent.builder[CVData]
      .render_P { props =>
        ReactFragment(
          <.header(
            ^.className := "personal-info-panel",
            PersonalInfo.Component(props.personalInfo)
          ),
          <.section(
            ^.className := "pull-left column-1",
            WorkExperience.Component(props.workExperience),
            Education.Component(props.educations),
            Languages.Component(props.languages),
          ),
          <.section(
            ^.className := "pull-left column-2",
            Skills.Component(props.skills),
            Strengths.Component(props.strengths),
            Projects.Component(props.projects),
          )
        )
      }.build
}
