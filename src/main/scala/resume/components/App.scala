package resume

import org.scalajs.dom._
import org.scalajs.dom.ext._
import scala.scalajs.js.timers._
import japgolly.scalajs.react._
import japgolly.scalajs.react.feature._
import japgolly.scalajs.react.vdom.html_<^._
import scala.concurrent.ExecutionContext.Implicits.global
import upickle.default._

import resume.components.loader._
import resume.models.CVData

object App {
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
      case Ready(cvData) => ReactFragment(
        renderUI(cvData, true),
        <.footer(
          ^.className := "page-footer",
          <.span("Created using Scalajs and other funky stuff."),
          <.span(
            <.a(
              ^.href := "https://github.com/KonstantinSimeonov/cv",
              ^.target := "_blank",
              "Source code"
            ),
            <.a(
              ^.href := "./target/web/public/main/resume.pdf",
              ^.target := "_blank",
              "Download as pdf"
            )
          )
        )
      )
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
        ),
        <.section(
          ^.className := "pull-left column-2",
          Skills.Component(cvData.skills),
          Strengths.Component(cvData.strengths),
          Projects.Component(cvData.projects),
          Languages.Component(cvData.languages),
        ),
      )

    def fetchData: Callback = Callback {
      Ajax.get("target/web/public/main/data.json").map {
        xhr =>
          val cvData = read[CVData](xhr.responseText)
          setTimeout(1000) {
            $.setState(Fading(cvData)).runNow()
            setTimeout(2000) {
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
