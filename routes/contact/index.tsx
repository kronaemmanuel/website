import { Container } from "../../components/Container.tsx";
import Navbar from "../../islands/Navbar.tsx";

export default function Contact() {
  return (
    <>
      <Navbar active="/contact" showLogo={false} />
      <Container>
        <h1 class="leading-tight text-gray-900 text-4xl md:text-5xl font-semibold">
          Let's get in touch
        </h1>
        <div class="mt-8 prose">
          <p>
            Email:{" "}
            <a href="mailto:kronaemmanuelwork@gmail.com">
              kronaemmanuelwork@gmail.com
            </a>
            <br />(You can probably guess my 'non-work' email.)
          </p>
          <p>Or just send me a message via this contact form:</p>
        </div>
        <form
          class="mt-8 w-full"
          action="https://api.staticforms.xyz/submit"
          method="POST"
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Your E-mail
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                name="email"
                required={true}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Your Message
              </label>
              <textarea
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                name="message"
                required={true}
              >
              </textarea>
            </div>
          </div>
          <input type="text" name="honeypot" style="display:none" />
          <input
            type="hidden"
            name="accessKey"
            value="1bb87fd2-22e7-4056-add8-ffe52fefcb42"
          />
          <input
            type="hidden"
            name="subject"
            value="Contact us from - kronaemmanuel.com"
          />
          <input type="hidden" name="replyTo" value="@" />
          <input
            type="hidden"
            name="redirectTo"
            value="http://kronaemmanuel.com/contact/email-successful"
          >
          </input>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <input
                class="px-6 py-2 border rounded-lg bg-white cursor-pointer"
                type="submit"
                value="Send"
              />
            </div>
          </div>
        </form>
      </Container>
    </>
  );
}
