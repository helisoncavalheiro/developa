import {
  faBell,
  faCheckCircle,
  faExclamationCircle,
  faInfoCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const messageTypes = {
  error: {
    bg: "danger",
    icon: faTimesCircle,
    defaultTitle: "Erro",
  },
  success: {
    bg: "success",
    icon: faCheckCircle,
    defaultTitle: "Sucesso",
  },
  warning: {
    bg: "warning",
    icon: faExclamationCircle,
    defaultTitle: "Atenção",
  },
  info: {
    bg: "info",
    icon: faInfoCircle,
    defaultTitle: "Importante",
  },
  generic: {
    bg: "primary",
    icon: faBell,
    deafultTitle: "Notificação",
  },
};

/**
 *
 * @param {string} type
 * @returns {{bg, icon}}
 */
const getTypeAttributes = (type) => {
  return messageTypes[type];
};

export { messageTypes, getTypeAttributes };
