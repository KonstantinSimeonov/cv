import Dependencies._

scalaVersion     := "2.13.3"
organization     := "resume"

enablePlugins(ScalaJSPlugin)
enablePlugins(ScalaJSBundlerPlugin)
enablePlugins(SbtWeb)
enablePlugins(SbtStylus)
name := "scalacv"
libraryDependencies ++= Seq(
  "com.github.japgolly.scalajs-react" %%% "core" % "1.7.5",
  "com.github.japgolly.scalajs-react" %%% "extra" % "1.7.5",
  "com.lihaoyi" %%% "upickle" % "1.2.0"
)
npmDependencies in Compile ++= Seq(
  "react" -> "16.13.1",
  "react-dom" -> "16.13.1"
)
scalaJSUseMainModuleInitializer in Compile := true
StylusKeys.useNib in Assets := true
includeFilter in (Assets, StylusKeys.stylus) := "*.styl"
includeFilter in Assets := "*.css" | "*.styl" | "*.png" | "*.jpg" | "*.gif" | "*.json" | "*.pdf"
sourceDirectory in Assets := file(".") / "src" / "assets"

Concat.groups := Seq(
  "public/main/styles.css" -> group(
    file(".") / "target" / "web" / "public" / "main" * "*.css"
  )
)
pipelineStages := Seq(concat)
