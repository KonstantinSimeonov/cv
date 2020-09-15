package resume

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

import resume.models._
import resume.components._
import resume.components.anchor._
import resume.components.timespan._

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
