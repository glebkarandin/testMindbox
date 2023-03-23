import React, { Component } from "react";

import { Modal } from "./Modal";
import { Invites } from "./Invites";

interface State {
  invites: string[];
  opened: boolean;
}

export class Root extends Component<{}, State> {
  public readonly state: State = {
    invites: [],
    opened: false
  };

  public toggle() {
    this.setState( {opened : !this.state.opened});
  }

  public invite(name: string) {
    this.setState(({ invites }) => {
      invites.push(name);

      return { invites };
    });
  }

  public render() {
    const toggle = this.toggle.bind(this)
    return (
      <>
        <button onClick={toggle}>Open invites list</button>
        <Modal opened={this.state.opened} onClose={toggle}>
          <Invites
            invites={this.state.invites}
            onAdd={this.invite.bind(this)}
          />
        </Modal>
      </>
    );
  }
}
