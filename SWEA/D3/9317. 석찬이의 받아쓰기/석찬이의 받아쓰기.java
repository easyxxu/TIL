import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution {
	public static void main(String[] args) throws IOException{
		// 학습지 = 길이가 N인 알파벳 대소문자로만 이루어진 문자열
		// 석찬이는 대소문자를 제대로 구분해서 이 문자열을 받아 적어야 한다.
		// N개의 문자를 받아적는 데는 성공했지만, 틀리게 적은 문자들이 몇 개 보인다.
		// 석찬이가 몇 개의 문자를 올바르게 받아 적었는지 개수 찾기
		// 적어야 할 문자열의 길이 - 석찬이가 잘못 쓴 문자 개수
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		int T = Integer.parseInt(br.readLine());
		
		for(int tc=1;tc<=T;tc++) {
			int total = Integer.parseInt(br.readLine());
			String test = br.readLine();
			String write = br.readLine();
			int cnt = 0;
			for(int i=0;i<total;i++) {
				if(test.charAt(i) != (write.charAt(i))) {
					cnt++;
				}
			}
			sb.append("#"+tc+" "+(total-cnt)+"\n");
		}
		System.out.print(sb);
	}
}
