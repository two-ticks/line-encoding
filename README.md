
# Line Encoding 

```
Line coding is the process of converting digital data
to digital signals. Line coding converts a sequence of
bits to a digital signal. At the sender, digital data are
encoded into a digital signal; at the receiver, the
digital data are recreated by decoding the digital
signal.
```

# Interactive Line Encoding Simulations 
* [Bi-polar AMI line-coding](https://two-ticks.github.io/line-encoding/bipolar-ami-line-coding.html)
* [Diffrential Manchester line-coding](https://two-ticks.github.io/line-encoding/diffrential-manchester-line-coding.html)
* [Manchester line-coding](https://two-ticks.github.io/line-encoding/manchester-line-coding.html)
* [MLT-3 line-coding](https://two-ticks.github.io/line-encoding/mlt-3-line-coding.html)
* [NRZ-I line-coding](https://two-ticks.github.io/line-encoding/nrz-i-line-coding.html)
* [NRZ-L line-coding](https://two-ticks.github.io/line-encoding/nrz-l-line-coding.html)
* [Unipolar NRZ line-coding](https://two-ticks.github.io/line-encoding/unipolar-nrz-line-coding.html)

# Line Coding Requirements

* Small transmission bandwidth
* Power efficiency: as small as possible for required data rate and error
  probability
* Error detection/correction
* Suitable power spectral density, e.g., little low frequency content
* Timing information: clock must be extracted from data
* Transparency: all possible binary sequences can be transmitted

# Alternate Mark Inversion (Bipolar) Signaling
AMI encodes 0 as 0 V and 1 as +V or −V, with alternating signs.
AMI was used in early PCM systems.
* Eliminates DC build up on cable.
* Reduces bandwidth compared to polar.
* Provides error detecting; every bit error results in bipolar violation.
* Guarantees transitions for timing recovery with long runs of ones.
