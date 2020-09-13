package example
import upickle.default._

package object models {
  case class Names(first: String, middle: String, last: String)
  implicit val namesRW = macroRW[Names]

  case class Contact(
    content: String,
    iconUrl: String,
    urlType: String
  )
  implicit val contactRW = macroRW[Contact]

  case class WorkExperience(
    from: String,
    to: String,
    jobTitle: String,
    location: String,
    descriptions: List[String]
  )
  implicit val workExperienceRW = macroRW[WorkExperience]

  case class PersonalInfo(
    names: Names,
    title: String,
    photoUrl: String,
    aboutMe: String,
    contacts: List[Contact]
  )
  implicit val personalInfoRW = macroRW[PersonalInfo]

  case class LanguageExpertise(languageName: String, level: String)
  implicit val languageExpertiseRW = macroRW[LanguageExpertise]

  case class Education(
    educationTitle: String,
    location: String,
    from: String,
    to: String,
    certificateUrl: Option[String] = None,
    linkText: Option[String] = None
  )
  implicit val educationRW = macroRW[Education]

  case class Link(url: String)
  implicit val linkRW = macroRW[Link]

  case class PersonalProject(
    title: String,
    description: String,
    links: List[Link]
  )
  implicit val personalProject = macroRW[PersonalProject]

  case class Strength(name: String, description: String, iconUrl: String)
  implicit val strengthRW = macroRW[Strength]

  case class Skill(name: String, description: String, priority: Int = Int.MaxValue)
  implicit val skillRW = macroRW[Skill]

  case class CVData(
    personalInfo: PersonalInfo, // DAMMIT
    workExperience: List[WorkExperience],
    languages: List[LanguageExpertise],
    educations: List[Education],
    skills: List[Skill],
    strengths: List[Strength]
  )
  implicit val cvDataRW = macroRW[CVData]
}
