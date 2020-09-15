package example

import org.scalajs.dom._
import org.scalajs.dom.ext._
import scala.scalajs.js.timers._
import japgolly.scalajs.react._
import japgolly.scalajs.react.feature._
import japgolly.scalajs.react.vdom.html_<^._
import scala.concurrent.ExecutionContext.Implicits.global
import upickle.default._

import example.components.loader._
import example.models.CVData

object Home {
  sealed trait AppState
  case object Loading extends AppState
  case class Fading(data: CVData) extends AppState
  case class Ready(data: CVData) extends AppState

  class AppBackend($: BackendScope[Unit, AppState]) {
    def render(state: AppState): VdomNode = state match {
      case Loading =>
        Loader("")
      case Fading(cvData) =>
        ReactFragment(
          Loader("fade"),
          renderUI(cvData, false)
        )
      case Ready(cvData) =>
        renderUI(cvData, true)
    }

    private def renderUI(cvData: CVData, fadeIn: Boolean): VdomNode = 
      <.div(
        ^.key := "app",
        ^.classSet(
          "app" -> true,
          "clearfix" -> true,
          "fade-in" -> fadeIn
        ),
        <.header(
          ^.className := "personal-info-panel",
          PersonalInfo.Component(cvData.personalInfo)
        ),
        <.section(
          ^.className := "pull-left column-1",
          WorkExperience.Component(cvData.workExperience),
          Education.Component(cvData.educations),
          Languages.Component(cvData.languages),
        ),
        <.section(
          ^.className := "pull-left column-2",
          Skills.Component(cvData.skills),
          Strengths.Component(cvData.strengths),
          Projects.Component(cvData.projects),
        )
      )

    def fetchData: Callback = Callback {
      Ajax.get("target/web/public/main/data.json").map {
        xhr =>
          val cvData = read[CVData](xhr.responseText)
          setTimeout(1000) {
            $.setState(Fading(cvData)).runNow()
            setTimeout(1000) {
              $.setState(Ready(cvData)).runNow()
            }
          }
      }
    }
  }


  val Component =
    ScalaComponent.builder[Unit]
      .initialState(Loading: AppState)
      .renderBackend[AppBackend]
      .componentDidMount(_.backend.fetchData)
      .build
}
