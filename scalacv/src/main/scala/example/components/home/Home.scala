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
            Languages.Component(Languages.Props(List())),
            Education.Component(Education.Props(List()))
          ),
          <.section(
            ^.className := "pull-left column-2"
          )
        )
      }.build
}
