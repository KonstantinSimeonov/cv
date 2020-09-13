package example

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

object Education {
  case class EducationEntry(title: String, location: String, from: String, to: String, certificateUrl: Option[String])
  case class Props(educationEntries: List[EducationEntry])

  val Component =
    ScalaComponent.builder[Props]
      .render_P { props =>
        <.article(
          ^.className := "education-section",
          <.section(
            ^.className := "cv-component education-component",
            <.ul(
              props.educationEntries.map { entry =>
                <.li(
                  ^.className := "bottom-dashed no-bullets",
                  <.h4(^.className := "education-title", entry.title),
                  <.p(^.className := "location", s"@ ${entry.location}"),
                  <.time(^.className := "timespan", s"${entry.from} - ${entry.to}"),
                  entry.certificateUrl.map { url =>
                    <.a(
                      ^.className := "link hover-highlight",
                      ^.href := url,
                      ^.target := "_blank",
                      url
                    )
                  }
                )
              }.toVdomArray
            )
          )
        )
      }.build
}
