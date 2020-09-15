package resume

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

import resume.models._
import resume.components.anchor._

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
              projects.sortBy(_.priority).map { p =>
                <.li(
                  ^.className := "bottom-dashed",
                  <.strong(p.title),
                  p.links.map { link =>
                    <.p(
                      Anchor(link.url)
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
