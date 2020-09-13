package example

import japgolly.scalajs.react.feature.ReactFragment
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

object Home {
  val Component =
    ScalaComponent.builder[Unit]
      .renderStatic(
        ReactFragment(
          <.header(
            ^.className := "personal-info-panel",
            PersonalInfo.Component(
              PersonalInfo.Props(
                PersonalInfo.Names(
                  "Koce", "Boce"
                ),
                "Zdraveyti!",
                List()
              )
            )
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
      ).build
}
