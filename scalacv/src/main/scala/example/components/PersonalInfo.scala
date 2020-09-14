package example

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

import example.models._

object PersonalInfo {
  val Component =
    ScalaComponent.builder[PersonalInfo]
      .render_P { props =>
        <.section(
          ^.className := "cv-component personal-info-component clearfix",
          <.div(
            ^.className := "pull-left",
            <.h1(^.className := "cv-name", s"${props.names.first} ${props.names.last}"),
            <.h3(^.className := "cv-title", props.title),
            <.div(
              ^.className := "contacts clearfix",
              props.contacts.map { c =>
                <.div(
                  ^.key := c.urlType,
                  ^.className := "pull-left",
                  <.img(^.className := "img-contact", ^.src := c.iconUrl),
                  " ",
                  c.urlType match {
                    case "email" | "url" =>
                      val prefix = if (c.urlType == "email") "mailto:" else ""
                      <.a(
                        ^.className := "link hover-highlight",
                        ^.href := s"$prefix${c.content}",
                        c.content
                      )
                    case _ =>
                      <.em(^.className := "content", c.content)
                  }
                )
              }.toVdomArray
            ),
            <.div(
              ^.className := "about-me",
              <.h3("A few words about me"),
              <.p(props.aboutMe)
            )
          ),
          <.div(
            ^.className := "photo-container pull-right",
            <.img(
              ^.className := "photo",
              ^.src := props.photoUrl,
              ^.alt := "photo of me"
            )
          )
        )
      }.build
}
