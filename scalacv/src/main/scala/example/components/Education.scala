package example

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

import example.models._
import example.components._
import example.components.anchor._
import example.components.timespan._

object Education {
  val Component =
    ScalaComponent.builder[List[Education]]
      .render_P { educations =>
        <.article(
          ^.className := "education-section",
          <.section(
            ^.className := "cv-component education-component",
            <.h2(^.className := "section-title", "Education"),
            <.ul(
              educations.map { entry =>
                <.li(
                  ^.className := "bottom-dashed no-bullets",
                  <.h4(^.className := "education-title", entry.educationTitle),
                  <.p(^.className := "location", s"@ ${entry.location}"),
                  Timespan(entry.from, entry.to),
                  entry.certificateUrl.map { Anchor(_) }
                )
              }.toVdomArray
            )
          )
        )
      }.build
}
