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
              ^.className := "clearfix",
              props.contacts.map { c =>
                <.div(
                  ^.key := c.urlType,
                  ^.className := "pull-left",
                  <.img(^.className := "img-contact", ^.src := c.iconUrl),
                  if (c.urlType == "email")
                    <.a(^.href := c.content, c.content)
                  else
                    <.em(^.className := "content", c.content)
                )
              }.toVdomArray
            )
          )
        )
      }.build
}
