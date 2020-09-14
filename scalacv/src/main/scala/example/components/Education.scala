package example

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

import example.models._
import example.components._

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
