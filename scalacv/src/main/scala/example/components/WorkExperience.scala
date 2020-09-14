package example

import japgolly.scalajs.react.feature.ReactFragment
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

import example.models._

object WorkExperience {
  val Component =
    ScalaComponent.builder[List[WorkExperience]]
      .render_P { workExperience =>
        <.article(^.className := "work-expirience-section",
          <.article(
            ^.className := "cv-component work-experience-component",
            <.h2(^.className := "section-title work-experience-title", "Work experience"),
            <.div(
              <.ol(
                ^.className := "experiences no-bullets",
                workExperience.map { entry =>
                  <.li(
                    ^.className := "bottom-dashed",
                    <.h4(^.className := "job-title", entry.jobTitle),
                    <.time(^.className := "timespan", s" ${entry.from} - ${entry.to}"),
                    <.span(^.className := "location", s"@ ${entry.location}"),
                    <.ul(
                      ^.className := "description-highlights",
                      entry.descriptions.map { <.li(_) }.toVdomArray
                    )
                  )
                }.toVdomArray
              )
            )
          )
        )
      }.build
}
