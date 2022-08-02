let timer;

const saveInput = () => {
  console.log("Input saved");
};

const debounce_leading = () => {
  const submit_button = document.getElementById("submit");
  submit_button.disabled = true;
  if (!timer) {
    saveInput();
    submit_button.style.backgroundColor = "#808080";
  }
  clearTimeout(timer);
  timer = setTimeout(() => {
    timer = undefined;
    submit_button.style.backgroundColor = "#03aeee";
    submit_button.disabled = false;
  }, 300);
};

const validate = () => {
  debounce_leading();

  const name_value = document.getElementById("ename").value;
  const e_id_value = document.getElementById("eid").value;
  const exp_value = document.getElementById("exp").value;
  const jod_value = document.getElementById("jod").value;

  let regex_arr = [0, 0, 0, 0];
  let msg_arr = ["name ", "employee id ", "experience ", "joining date "];
  let alert_msg = "Invalid ";

  let re_0 = /^[a-zA-Z ]+$/;
  let re_1 = /^E[-][0-9]+$/i;
  let re_2 = /^[0-9]{1,2}$/;
  let re_3 = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

  if (!re_0.test(name_value)) {
    regex_arr[0] = 1;
  }

  if (!re_1.test(e_id_value)) {
    regex_arr[1] = 1;
  }

  if (!re_2.test(exp_value)) {
    regex_arr[2] = 1;
  }

  if (!re_3.test(jod_value)) {
    regex_arr[3] = 1;
  }

  for (let i = 0; i < regex_arr.length; i++) {
    if (regex_arr[i]) {
      alert_msg = alert_msg + msg_arr[i];
    }
  }

  if (alert_msg.length > 8) alert(alert_msg);
};
