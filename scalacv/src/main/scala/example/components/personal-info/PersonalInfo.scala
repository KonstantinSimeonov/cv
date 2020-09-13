package example

import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._

object PersonalInfo {
  case class Names(first: String, last: String)
  case class Contact(url: String, content: String, iconUrl: String)
  case class Props(names: Names, title: String, contacts: List[Contact])
  val Component =
    ScalaComponent.builder[Props]
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
                  ^.className := "pull-left",
                  <.img(^.className := "img-contact", ^.src := c.iconUrl),
                  <.a(
                    ^.href := c.url
                  ),
                  <.em(^.className := "content", c.content)
                )
              }.toVdomArray
            )
          )
        )
      }.build
}
