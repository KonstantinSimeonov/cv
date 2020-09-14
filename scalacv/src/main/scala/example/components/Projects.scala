package example

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

import example.models._

object Projects {
  val Component =
    ScalaComponent.builder[List[PersonalProject]]
      .render_P { projects =>
        <.article(^.className := "projects-section",
          <.section(
            ^.className := "cv-component projects-component",
            <.h2(^.className := "section-title projects-title", "Projects"),
            <.ul(
              ^.className := "no-bullets projects",
              projects.map { p =>
                <.li(
                  ^.className := "bottom-dashed",
                  <.strong(p.title),
                  p.links.map { link =>
                    <.p(
                      <.a(
                        ^.href := link.url,
                        ^.className := "link hover-highlight",
                        ^.target := "_blank",
                        link.url
                      )
                    )
                  }.toVdomArray,
                  <.p(^.className := "description", p.description)
                )
              }.toVdomArray
            )
          )
        )
      }.build
}
