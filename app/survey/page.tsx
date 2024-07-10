import PageHeader from "app/_components/PageHeader";
import Link from "next/link";

// scale of 1-5
function SurveyQuestion({
  question,
  textArea,
}: {
  question: string;
  textArea?: boolean;
}) {
  return (
    <div className="border-b border-neutral-200 p-5 py-8">
      <div className="mb-4 text-lg font-semibold">{question}</div>
      {textArea ? (
        <textarea
          className="h-32 w-full rounded-md border border-neutral-300 p-4"
          placeholder="Answer..."
        />
      ) : (
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <input type="radio" name={question} value="1" className="h-4 w-4" />
            <label className="text-sm">Terrible</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" name={question} value="2" className="h-4 w-4" />
            <label className="text-sm">Bad</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" name={question} value="3" className="h-4 w-4" />
            <label className="text-sm">Okay</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" name={question} value="4" className="h-4 w-4" />
            <label className="text-sm">Great</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" name={question} value="5" className="h-4 w-4" />
            <label className="text-sm">Amazing</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <PageHeader title="Charity Survey" hasX={false} hasBack={true}>
      <div className="flex flex-col gap-4 border-b border-neutral-300 p-6 font-medium">
        <p>Please answer the following questions.</p>
      </div>

      <SurveyQuestion
        question="What motivated you to donate to our charity this cycle?"
        textArea
      />
      <SurveyQuestion
        question="What has been your preferred method for getting information from our charity this past cycle? [ie: chatbox, survey feedback, charity feed, other]"
        textArea
      />
      <SurveyQuestion
        question="How many times have you made use of the chat feature to directly communicate with a charity representative?"
        textArea
      />
      <SurveyQuestion question="How would you rate your experience when communicating with charity representatives through the chat feature?" />
      <SurveyQuestion question="How would you rate your level of satisfaction regarding the overall level of communication of the charity through our feed, reports and messaging?" />

      <div className="flex items-center justify-between p-6">
        <Link
          className="rounded-md border border-red-200 bg-red-50 p-4 py-2 font-bold text-red-500"
          href="/"
        >
          Exit without saving
        </Link>
        <Link
          className="rounded-md border border-green-200 bg-green-50 p-4 py-2 font-bold text-green-600"
          href="/"
        >
          Submit Survey
        </Link>
      </div>
    </PageHeader>
  );
}
